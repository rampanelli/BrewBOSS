# BrewBOSS v2.2.22r

*User Operation Manual · Manual de Operação do Usuário*

**Download:** [binaries/](binaries/) · **Interactive help:** [help/](https://rampanelli.github.io/BrewBOSS/help/)

---

## English

### Overview

BrewBOSS is a controller for electric brewing equipment. It manages heaters, pump and timers for a full brew day — mash, boil and post-boil — reporting temperatures and progress in real time.

**Three ways to operate:**
- **Web interface** — single page served by the device; full control from any browser.
- **LCD & 4 buttons** — full stand-alone operation, even with no network.
- **REST API** — optional, for integrations and scripts.

**What it can do:**
- Programmable **mash** steps, automatic **boil** with timed hop additions, and **post-boil** with temperature-triggered additions and final cooling.
- Fully **manual** mode (direct power) or **pre-programmed recipes**.
- **Recipe management** (create, edit, save, activate, delete, import). Compatible with BeerSmith / Brewfather.
- **Temperature CSV log** (one sample per minute with events) for detailed mash graphs.
- **Automatic power-loss recovery** — continues the brew where it stopped.
- **Safety system** — over-temperature and sensor-loss cut-off.
- **Online or offline** operation with 20×4 LCD status display.

**Hardware:** ESP8266 (Wemos), ESP32 and ESP32-C3. 100% compatible with BrewManiac / BrewUNO wiring.

### Accessing the System

1. **Power on** the controller.
2. **Connect** to the BrewBOSS access point (Wi‑Fi: `BrewBOSS`, password: `brewboss`, IP: `192.168.4.1`).
3. Open `http://192.168.4.1` in a browser.
4. **Login** — default password is `brewboss` (empty password disables login entirely).

**Access levels:** correct password = full access; IGNORE = read-only; wrong password = up to 10 attempts then read-only.

### Navigating the Interface

| Menu | Purpose |
|------|---------|
| **Dashboard** | Main screen — live temperatures, timer, control buttons |
| **Recipes** | Recipe library and mash/boil step editors |
| **Setup** | Settings, System (network, security, time, backup), About |
| **Mode** | Color theme switcher |
| **About** | Version and hardware info |

**Status bar:** Wi‑Fi indicator, NTP dot (green = synced), HEAP dot (free memory), UPTIME.

### Step-by-Step Operation

1. **Prepare** — Fill the kettle, place sensors, connect to the interface.
2. **Choose a recipe** — Recipes → pick one → **Activate**.
3. **Check settings** — Setup → Settings → confirm unit, boil temp/time, sensors.
4. **Start mash** — Dashboard → **Start**. System heats to first step target, runs timer.
5. **Follow along** — Watch gauges and Steps history. Release locked steps when they beep.
6. **Boil** — Auto-advances after last mash step. Heats to boil, runs timer, fires hop additions.
7. **Post-boil & cooling** — Monitors cooling, triggers temperature-based additions, then final cooling.
8. **Finish** — Buzzer signals end, screen shows total brew time.

### Control Buttons (Dashboard)

| Button | Action |
|--------|--------|
| **Start** | Begins the mash |
| **Pause / Resume** | Pauses and resumes |
| **Stop** | Stops everything |
| **Skip** | Skips current mash step |
| **Boil** | Starts boil directly |
| **Pump** | Toggles pump on/off |
| **Prime** | Automatic priming cycle |

### Operation Modes

- **Mash** — Runs mash steps; auto-advances to boil after the last step.
- **Boil** — Heats to boil temp, runs timer, fires timed additions. Can start independently.
- **Post-boil** — Heating off; monitors cooling, triggers temperature additions, then final cooling.
- **Manual** — Direct heater power (open loop). Target is informational only. Not saved for recovery.
- **Delay** — Scheduled start; LCD shows countdown, process begins automatically.

### Sounds (Buzzer)

| When | You hear |
|------|----------|
| Target temperature reached | Two long beeps |
| Mash step advances | Short–short–long |
| Boil starts / hop addition | Two short + two long |
| Step locked (needs action) | Two beeps every 15 s |
| Brew complete | Four long beeps |
| Safety triggered | Alarm pattern |

### Standalone Use — LCD & 4 Buttons

**20×4 Display:**
```
[w] BrewBOSS 00:14:32         ← Wi‑Fi icon + title + step timer
[H]  65.20>66   [W] 68% [P]   ← Main: current>target, power, PWM, pump
[S]  74.00>74   100%        M  ← Sparge: current>target, PWM, B/M/L flag
Add Citra 30g@15'              ← Last event message (or IP/AP)
```

**4 Buttons:**

| Press | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| **Short** | Pump on/off | Power **−10%** | Power **+10%** | Pause / Resume |
| **Long** (~2 s) | **Prime** | Start manual / skip / unlock | Start **boil** | Start **mash** |
| **Very long** (~3 s) | — | Stop | Stop | Stop |

### Power-Loss Recovery

If power is lost during a brew, on restart the device pauses and shows "RECOVERED! RESUME?" on the LCD.
- Press **button 4 (short)** to resume.
- If the clock was synced, remaining time adjusts for downtime.
- Manual mode is **not** recovered.

### Firmware & Flashing

| Controller | File | Type | Offset | Size |
|------------|------|------|--------|------|
| **Wemos** ESP8266 | `fw-wemos_v2.2.22r.bin` | Firmware | `0x0` | 436,936 B |
| | `littlefs-wemos_v2.2.22r.bin` | LittleFS | `0x200000` | 2,072,576 B |
| **ESP32** | `fw-esp32_v2.2.22i.bin` | Firmware | `0x10000` | 984,608 B |
| | `littlefs-esp32_v2.2.22i.bin` | LittleFS | `0x290000` | 1,441,792 B |
| **ESP32-C3** | `fw-esp32c3_v2.2.22i.bin` | Firmware | `0x10000` | 995,744 B |
| | `littlefs-esp32c3_v2.2.22i.bin` | LittleFS | `0x290000` | 1,441,792 B |

```bash
# Wemos / ESP8266
esptool.py --chip esp8266 --port COMx write_flash 0x0 fw-wemos_v2.2.22r.bin 0x200000 littlefs-wemos_v2.2.22r.bin

# ESP32
esptool.py --chip esp32 --port COMx write_flash 0x10000 fw-esp32_v2.2.22i.bin 0x290000 littlefs-esp32_v2.2.22i.bin

# ESP32-C3
esptool.py --chip esp32c3 --port COMx write_flash 0x10000 fw-esp32c3_v2.2.22i.bin 0x290000 littlefs-esp32c3_v2.2.22i.bin
```

### What's New in v2.2.22r

- **Web page embedded in firmware** (PROGMEM) — no longer depends on LittleFS for the UI.
  Only firmware OTA is needed to update the interface.
- **Keypad configuration panel** — remap physical buttons (PUMP/MANUAL/BOIL/START) to any
  BTN1–BTN4 position via Setup → Settings. Default / Personal / Save buttons.
- **Boot heater glitch fix** — GPIO output register cleared before `pinMode()` on ESP8266,
  preventing a brief HIGH pulse on heater pins at power-on.
- **Custom confirm modals** — all confirmation dialogs (Start brew, Stop, etc.) now use a
  styled modal instead of the browser's native `confirm()`.

### Troubleshooting

| Symptom | Likely cause & what to do |
|---------|--------------------------|
| Cannot open `192.168.4.1` | Ensure you're joined to `BrewBOSS` network. Use `http://192.168.4.1`. |
| Access point unstable | In MIXED mode trying to reach unavailable Wi‑Fi — waits 60 s then falls back to AP-only. |
| Temperature shows `---` | Sensor not detected/disconnected. Check wiring, reassign sensor in Settings. |
| Heaters won't turn on / SAFETY | Over-temperature or sensor loss. Let it cool / fix sensor. |
| Cannot make changes (read-only) | Tap "Read‑only — tap to login" badge and enter password. |
| Forgot the password | Re-flash the filesystem to reset to `brewboss`. |
| Wrong time on logs | Set NTP server and GMT offset in System. |
| Paused after power cut | Recovery feature. Press button 4 (short) to resume. |

### Best Practices

- Calibrate sensor **offsets** against a trusted thermometer before first brew.
- Run **Prime** and confirm flow before starting mash.
- Make a **Backup** (Export) after configuring the device.
- Keep area near heaters clear; never leave an active brew fully unattended.

### License

**Personal / non-commercial use only.** See the [LICENSE](LICENSE.md) file for the full terms.

---

## Português (BR)

### Visão Geral

O BrewBOSS é um controlador para equipamentos de brassagem elétrica. Gerencia aquecedores, bomba e temporizadores — mostura, fervura e pós‑fervura — informando temperaturas e progresso em tempo real.

**Três modos de operação:**
- **Interface web** — página única servida pelo dispositivo; controle total pelo navegador.
- **LCD e 4 botões** — operação autônoma completa, mesmo sem rede.
- **API REST** — opcional, para integrações e scripts.

**O que ele faz:**
- Passos programáveis de **mostura**, **fervura** automática com adições cronometradas, e **pós‑fervura** com adições por temperatura e resfriamento final.
- Modo totalmente **manual** (potência direta) ou por **receitas**.
- **Gerenciamento de receitas** (criar, editar, salvar, ativar, excluir, importar). Compatível com BeerSmith / Brewfather.
- **Log CSV** de temperatura (uma amostra por minuto com eventos) para gráficos detalhados.
- **Recuperação automática** após queda de energia.
- **Sistema de segurança** — corte por sobre‑temperatura e perda de sensor.
- Funcionamento **online ou offline** com display LCD 20×4.

**Hardware:** ESP8266 (Wemos), ESP32 e ESP32-C3. 100% compatível com a fiação BrewManiac / BrewUNO.

### Acessando o Sistema

1. **Ligue** o controlador.
2. **Conecte-se** ao ponto de acesso BrewBOSS (Wi‑Fi: `BrewBOSS`, senha: `brewboss`, IP: `192.168.4.1`).
3. Abra `http://192.168.4.1` no navegador.
4. **Login** — senha padrão: `brewboss` (senha vazia desabilita o login).

**Níveis de acesso:** senha correta = acesso total; IGNORE = somente leitura; senha errada = até 10 tentativas, depois somente leitura.

### Navegação

| Menu | Função |
|------|--------|
| **Dashboard** | Tela principal — temperaturas, temporizador, botões de controle |
| **Recipes** | Biblioteca de receitas e editores de mostura/fervura |
| **Setup** | Configurações, Sistema (rede, segurança, hora, backup), Sobre |
| **Mode** | Alterna o tema de cores |
| **About** | Versão e informações do hardware |

**Barra de status:** Wi‑Fi, NTP (verde = sincronizado), HEAP (memória livre), UPTIME.

### Operação Passo a Passo

1. **Prepare** — Encha a panela, posicione os sensores, conecte-se à interface.
2. **Escolha uma receita** — Recipes → selecione → **Active**.
3. **Verifique as configurações** — Setup → Settings → confirme unidade, temperaturas e sensores.
4. **Inicie a mostura** — Dashboard → **Start**. O sistema aquece ao alvo e executa o temporizador.
5. **Acompanhe** — Observe os medidores e o Steps history. Destrave passos travados.
6. **Fervura** — Avança automaticamente após a mostura. Aquece, executa temporizador, dispara adições.
7. **Pós‑fervura e resfriamento** — Monitora resfriamento, dispara adições por temperatura, depois resfriamento final.
8. **Finalize** — Buzzer sinaliza o fim, tela mostra o tempo total.

### Botões de Controle (Dashboard)

| Botão | Ação |
|-------|------|
| **Start** | Inicia a mostura |
| **Pause / Resume** | Pausa e retoma |
| **Stop** | Para tudo |
| **Skip** | Pula o passo de mostura atual |
| **Boil** | Inicia fervura diretamente |
| **Pump** | Liga/desliga a bomba |
| **Prime** | Ciclo de escorva automático |

### Modos de Operação

- **Mostura** — Executa passos de mostura; avança automaticamente para fervura.
- **Fervura** — Aquece até ferver, executa temporizador, dispara adições. Pode iniciar isoladamente.
- **Pós‑fervura** — Aquecimento desligado; monitora resfriamento e dispara adições por temperatura.
- **Manual** — Potência direta do aquecedor. Alvo é informativo. Não salvo para recuperação.
- **Delay** — Partida programada; LCD mostra contagem regressiva. Inicia automaticamente.

### Sons (Buzzer)

| Quando | Você ouve |
|--------|-----------|
| Temperatura alvo atingida | Dois bipes longos |
| Passo de mostura avança | Curto–curto–longo |
| Fervura inicia / adição de lúpulo | Dois curtos + dois longos |
| Passo travado (precisa de ação) | Dois bipes a cada 15 s |
| Brassagem concluída | Quatro bipes longos |
| Segurança acionada | Padrão de alarme |

### Uso Autônomo — LCD e 4 Botões

**Display 20×4:**
```
[w] BrewBOSS 00:14:32         ← Ícone Wi‑Fi + título + temporizador
[H]  65.20>66   [W] 68% [P]   ← Principal: atual>alvo, potência, PWM, bomba
[S]  74.00>74   100%        M  ← Sparge: atual>alvo, PWM, flag B/M/L
Add Citra 30g@15'              ← Última mensagem de evento (ou IP/AP)
```

**4 Botões:**

| Toque | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| **Curto** | Bomba on/off | Potência **−10%** | Potência **+10%** | Pausar / Retomar |
| **Longo** (~2 s) | **Prime** (escorva) | Iniciar manual / pular / destravar | Iniciar **fervura** | Iniciar **mostura** |
| **Muito longo** (~3 s) | — | Parar | Parar | Parar |

### Recuperação Após Queda de Energia

Ao reiniciar após queda, o dispositivo pausa e mostra "RECOVERED! RESUME?" no LCD.
- Pressione **botão 4 (curto)** para retomar.
- Se o relógio estava sincronizado, o tempo restante é ajustado.
- Modo manual **não** é recuperado.

### Firmware e Gravação

| Controlador | Arquivo | Tipo | Offset | Tamanho |
|-------------|---------|------|--------|---------|
| **Wemos** ESP8266 | `fw-wemos_v2.2.22i.bin` | Firmware | `0x0` | 408.880 B |
| | `littlefs-wemos_v2.2.22i.bin` | LittleFS | `0x300000` | 1.024.000 B |
| **ESP32** | `fw-esp32_v2.2.22i.bin` | Firmware | `0x10000` | 984.608 B |
| | `littlefs-esp32_v2.2.22i.bin` | LittleFS | `0x290000` | 1.441.792 B |
| **ESP32-C3** | `fw-esp32c3_v2.2.22i.bin` | Firmware | `0x10000` | 995.744 B |
| | `littlefs-esp32c3_v2.2.22i.bin` | LittleFS | `0x290000` | 1.441.792 B |

```bash
# Wemos / ESP8266
esptool.py --chip esp8266 --port COMx write_flash 0x0 fw-wemos_v2.2.22i.bin 0x300000 littlefs-wemos_v2.2.22i.bin

# ESP32
esptool.py --chip esp32 --port COMx write_flash 0x10000 fw-esp32_v2.2.22i.bin 0x290000 littlefs-esp32_v2.2.22i.bin

# ESP32-C3
esptool.py --chip esp32c3 --port COMx write_flash 0x10000 fw-esp32c3_v2.2.22i.bin 0x290000 littlefs-esp32c3_v2.2.22i.bin
```

### Solução de Problemas

| Sintoma | Causa provável e o que fazer |
|---------|------------------------------|
| Não abre `192.168.4.1` | Verifique se está conectado à rede `BrewBOSS`. Digite `http://192.168.4.1`. |
| Ponto de acesso instável | No modo MIXED tentando acessar Wi‑Fi inacessível — aguarda 60 s e estabiliza em AP‑only. |
| Temperatura mostra `---` | Sensor não detectado/desconectado. Verifique fiação e reatribua em Settings. |
| Aquecedores não ligam / SAFETY | Sobre‑temperatura ou perda de sensor. Deixe esfriar / corrija o sensor. |
| Não consegue alterar (somente leitura) | Toque no selo "Read‑only — tap to login" e informe a senha. |
| Esqueceu a senha | Regrave o sistema de arquivos para redefinir para `brewboss`. |
| Hora errada nos logs | Defina servidor NTP e fuso GMT em System. |
| Pausado após queda de energia | Recurso de recuperação. Pressione botão 4 (curto) para retomar. |

### Boas Práticas

- Calibre os **offsets** dos sensores com um termômetro de confiança antes da primeira brassagem.
- Execute o **Prime** e confira o fluxo antes de iniciar a mostura.
- Faça um **Backup** (Export) após configurar o dispositivo.
- Mantenha a área próxima aos aquecedores livre; nunca deixe uma brassagem ativa sem supervisão.

### Licença

**Uso pessoal / não comercial apenas.** Consulte o arquivo [LICENSE](LICENSE.md) para os termos completos.
