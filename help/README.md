# BrewBOSS — Brew Controller `v2.2.22i`

Brew controller for **ESP8266 / ESP32 / ESP32-C3** — control via web UI, 20×4 LCD or physical buttons.

**License:** personal / non-commercial use only.

> 🌐 **Full interactive page (10 languages, styled):** https://rampanelli.github.io/BrewBOSS/help/
> 📦 **Binaries for download:** [`../binaries/`](../binaries/)

---

## Overview

BrewBOSS is a lightweight brewing automation controller. It runs the mash, boil and post-boil stages with PID heating, pump recirculation and timed hop additions, and recovers automatically after a power loss. Operate it from the built-in web interface, the 20×4 LCD or the 4 physical buttons.

## Files and offsets

Firmware (LittleFS shipped separately) for the 3 supported controllers. Filesystem images are in **LittleFS** format (not SPIFFS).

| Controller | File | Type | Offset | Size |
|---|---|---|---|---|
| **Wemos** (ESP8266) | [`fw-wemos_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/fw-wemos_v2.2.22i.bin) | Firmware | `0x00000000` | 408,880 B |
| | [`littlefs-wemos_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/littlefs-wemos_v2.2.22i.bin) | LittleFS | `0x00300000` | 1,024,000 B |
| **ESP32** (esp32dev) | [`fw-esp32_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/fw-esp32_v2.2.22i.bin) | Firmware | `0x00010000` | 984,608 B |
| | [`littlefs-esp32_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/littlefs-esp32_v2.2.22i.bin) | LittleFS | `0x00290000` | 1,441,792 B |
| **ESP32-C3** | [`fw-esp32c3_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/fw-esp32c3_v2.2.22i.bin) | Firmware | `0x00010000` | 995,744 B |
| | [`littlefs-esp32c3_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/littlefs-esp32c3_v2.2.22i.bin) | LittleFS | `0x00290000` | 1,441,792 B |

## Prerequisites

- Install esptool: `pip install esptool`
- Connect the controller via USB and find its serial port (e.g. `COM5` on Windows, `/dev/ttyUSB0` on Linux).
- Run the commands below from the [`binaries/`](../binaries/) folder (where the `.bin` files are).
- Replace `COMx` with the correct port. You can speed it up with `--baud 460800`.

## Flashing (update)

For an already-provisioned controller, flash the firmware first, then the filesystem — two separate steps (more reliable):

**Wemos / ESP8266 — firmware**
```bash
esptool.py --chip esp8266 --port COMx --baud 460800 write_flash 0x0 fw-wemos_v2.2.22i.bin
```
**Wemos / ESP8266 — filesystem**
```bash
esptool.py --chip esp8266 --port COMx --baud 460800 write_flash 0x300000 littlefs-wemos_v2.2.22i.bin
```

**ESP32 (esp32dev) — firmware**
```bash
esptool.py --chip esp32 --port COMx --baud 460800 write_flash 0x10000 fw-esp32_v2.2.22i.bin
```
**ESP32 (esp32dev) — filesystem**
```bash
esptool.py --chip esp32 --port COMx --baud 460800 write_flash 0x290000 littlefs-esp32_v2.2.22i.bin
```

**ESP32-C3 — firmware**
```bash
esptool.py --chip esp32c3 --port COMx --baud 460800 write_flash 0x10000 fw-esp32c3_v2.2.22i.bin
```
**ESP32-C3 — filesystem**
```bash
esptool.py --chip esp32c3 --port COMx --baud 460800 write_flash 0x290000 littlefs-esp32c3_v2.2.22i.bin
```

> **ESP8266:** the firmware already includes the bootloader (eboot), so it is written at `0x0`. The 2 files are enough.

## Blank chip (ESP32 / ESP32-C3)

On a new/erased chip you must also flash the bootloader, partition table and `boot_app0` (found in `.pio/build/<env>/`: `bootloader.bin`, `partitions.bin`, `boot_app0.bin`).

**ESP32 — bootloader at 0x1000**
```bash
esptool.py --chip esp32 --port COMx --baud 460800 write_flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 fw-esp32_v2.2.22i.bin 0x290000 littlefs-esp32_v2.2.22i.bin
```

**ESP32-C3 — bootloader at 0x0**
```bash
esptool.py --chip esp32c3 --port COMx --baud 460800 write_flash 0x0 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 fw-esp32c3_v2.2.22i.bin 0x290000 littlefs-esp32c3_v2.2.22i.bin
```

> **Erase everything first (optional):** `esptool.py --chip <esp32|esp32c3|esp8266> --port COMx erase_flash`. This also wipes the WiFi/recipes config stored in LittleFS.

## Notes

- Offsets are valid for the current partition table (4 MB flash). If the table changes, the offsets change.
- Images are **LittleFS** (not SPIFFS) — the firmware mounts the filesystem as LittleFS.
- After flashing, the controller starts the web server; access it via the network IP or the AP. In the UI, the **Mode** button cycles through the color schemes.
- ESP32-C3 with native USB: the port appears as an Espressif serial device (VID `303A`); reset/boot for flashing is automatic.

---

<details>
<summary><b>🇧🇷 Português (BR)</b></summary>

<br>

# BrewBOSS — Controlador de Brassagem `v2.2.22i`

Controlador de brassagem para **ESP8266 / ESP32 / ESP32-C3** — controle pela interface web, LCD 20×4 ou botões físicos.

**Licença:** uso pessoal/não comercial apenas.

> 🌐 **Página completa interativa (10 idiomas, estilizada):** https://rampanelli.github.io/BrewBOSS/help/
> 📦 **Binários para download:** [`../binaries/`](../binaries/)

## Visão geral

O BrewBOSS é um controlador leve de automação de brassagem. Executa as etapas de mostura, fervura e pós-fervura com aquecimento PID, recirculação por bomba e adições de lúpulo por tempo, e se recupera automaticamente após queda de energia. Opere pela interface web embutida, pelo LCD 20×4 ou pelos 4 botões físicos.

## Arquivos e offsets

Firmware (LittleFS fornecido à parte) para os 3 controladores suportados. As imagens de filesystem estão no formato **LittleFS** (não SPIFFS).

| Controlador | Arquivo | Tipo | Offset | Tamanho |
|---|---|---|---|---|
| **Wemos** (ESP8266) | [`fw-wemos_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/fw-wemos_v2.2.22i.bin) | Firmware | `0x00000000` | 408.880 B |
| | [`littlefs-wemos_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/littlefs-wemos_v2.2.22i.bin) | LittleFS | `0x00300000` | 1.024.000 B |
| **ESP32** (esp32dev) | [`fw-esp32_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/fw-esp32_v2.2.22i.bin) | Firmware | `0x00010000` | 984.608 B |
| | [`littlefs-esp32_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/littlefs-esp32_v2.2.22i.bin) | LittleFS | `0x00290000` | 1.441.792 B |
| **ESP32-C3** | [`fw-esp32c3_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/fw-esp32c3_v2.2.22i.bin) | Firmware | `0x00010000` | 995.744 B |
| | [`littlefs-esp32c3_v2.2.22i.bin`](https://github.com/rampanelli/BrewBOSS/raw/main/binaries/littlefs-esp32c3_v2.2.22i.bin) | LittleFS | `0x00290000` | 1.441.792 B |

## Pré-requisitos

- Instale o esptool: `pip install esptool`
- Conecte o controlador via USB e descubra a porta serial (ex.: `COM5` no Windows, `/dev/ttyUSB0` no Linux).
- Execute os comandos abaixo na pasta [`binaries/`](../binaries/) (onde estão os arquivos `.bin`).
- Substitua `COMx` pela porta correta. Você pode acelerar com `--baud 460800`.

## Gravação (atualização)

Para um controlador já provisionado, grave o firmware e depois o filesystem — em duas etapas separadas (mais confiável):

**Wemos / ESP8266 — firmware**
```bash
esptool.py --chip esp8266 --port COMx --baud 460800 write_flash 0x0 fw-wemos_v2.2.22i.bin
```
**Wemos / ESP8266 — filesystem**
```bash
esptool.py --chip esp8266 --port COMx --baud 460800 write_flash 0x300000 littlefs-wemos_v2.2.22i.bin
```

**ESP32 (esp32dev) — firmware**
```bash
esptool.py --chip esp32 --port COMx --baud 460800 write_flash 0x10000 fw-esp32_v2.2.22i.bin
```
**ESP32 (esp32dev) — filesystem**
```bash
esptool.py --chip esp32 --port COMx --baud 460800 write_flash 0x290000 littlefs-esp32_v2.2.22i.bin
```

**ESP32-C3 — firmware**
```bash
esptool.py --chip esp32c3 --port COMx --baud 460800 write_flash 0x10000 fw-esp32c3_v2.2.22i.bin
```
**ESP32-C3 — filesystem**
```bash
esptool.py --chip esp32c3 --port COMx --baud 460800 write_flash 0x290000 littlefs-esp32c3_v2.2.22i.bin
```

> **ESP8266:** o firmware já inclui o bootloader (eboot), por isso é gravado em `0x0`. Os 2 arquivos bastam.

## Chip zerado (ESP32 / ESP32-C3)

Em um chip novo/apagado também é preciso gravar o bootloader, a tabela de partições e o `boot_app0` (em `.pio/build/<env>/`: `bootloader.bin`, `partitions.bin`, `boot_app0.bin`).

**ESP32 — bootloader em 0x1000**
```bash
esptool.py --chip esp32 --port COMx --baud 460800 write_flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 fw-esp32_v2.2.22i.bin 0x290000 littlefs-esp32_v2.2.22i.bin
```

**ESP32-C3 — bootloader em 0x0**
```bash
esptool.py --chip esp32c3 --port COMx --baud 460800 write_flash 0x0 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 fw-esp32c3_v2.2.22i.bin 0x290000 littlefs-esp32c3_v2.2.22i.bin
```

> **Apagar tudo antes (opcional):** `esptool.py --chip <esp32|esp32c3|esp8266> --port COMx erase_flash`. Isso também apaga a configuração de WiFi/receitas salva no LittleFS.

## Notas

- Offsets válidos para a tabela de partições atual (flash de 4 MB). Se a tabela mudar, os offsets mudam.
- As imagens são **LittleFS** (não SPIFFS) — o firmware monta o filesystem como LittleFS.
- Após a gravação, o controlador inicia o servidor web; acesse pelo IP da rede ou pelo AP. Na interface, o botão **Mode** percorre os esquemas de cor.
- ESP32-C3 com USB nativo: a porta aparece como dispositivo serial Espressif (VID `303A`); o reset/boot para gravação é automático.

</details>
