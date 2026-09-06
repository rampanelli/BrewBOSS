import { ESPLoader, Transport } from "./lib/esptool-js.bundle.js";

const I18N = {
  "pt-BR": {
    "nav.features": "Recursos", "nav.innovation": "Inovação", "nav.how": "Como funciona",
    "nav.flash": "Web Flasher",
    "hero.pill": "Web Flasher oficial",
    "hero.title1": "Sua brassagem.", "hero.title2": "No comando absoluto.",
    "hero.sub": "BrewBOSS é um controlador de brassagem de precisão que roda em ESP8266, ESP32-C3 e ESP32-C5 — com PID inteligente, sensores DS18B20, receitas profissionais e uma interface web embutida no próprio firmware.",
    "hero.cta": "Gravar o firmware agora", "hero.cta2": "Explorar o projeto",
    "hero.c1": "controladores", "hero.c2": "idiomas", "hero.c3": "sensores", "hero.c4": "drivers extras",
    "feat.kicker": "Feito para cervejeiros", "feat.title": "Todo o controle da sua brassagem, num chip pequeno.",
    "feat.sub": "Cada recurso foi pensado para quem leva a precisão a sério — sem abrir mão da simplicidade.",
    "feat1.t": "PID inteligente", "feat1.d": "Mantém a temperatura alvo com precisão, ajustando a potência do aquecedor em tempo real durante mostura e fervura.",
    "feat2.t": "Receitas profissionais", "feat2.d": "Importa BeerXML, Brewfather e BeerSmith. Passos de mostura, fervura e adições de lúpulo organizados e editáveis.",
    "feat3.t": "Sensores DS18B20", "feat3.d": "Múltiplos sensores de temperatura com endereçamento automático e calibração por offset — mostura, água e fervura.",
    "feat4.t": "Interface web embutida", "feat4.d": "Painel completo dentro do firmware. Controle por WiFi, receitas, logs e configurações — sem instalar nada.",
    "feat5.t": "Atuadores e alarmes", "feat5.d": "Aquecedor com controle de potência, bomba de recirculação, buzzer e botões de PAUSE, RESUME e SKIP na palma da mão.",
    "feat6.t": "Recuperação inteligente", "feat6.d": "Se a energia cair no meio da brassagem, o BrewBOSS retoma o passo exato onde parou. Seus dados sobrevivem a quedas.",
    "inno.kicker": "Engenharia", "inno.title": "Um firmware de laboratório, feito artesanalmente.",
    "inno.sub": "Arquitetura em camadas, código enxuto e um detalhe raro: otimização obsessiva de memória e estabilidade.",
    "in1.t": "Multi-plataforma de verdade", "in1.d": "Um único código, quatro alvos. ESP8266, ESP32, ESP32-C3 e o novíssimo ESP32-C5 — com pinos e periféricos isolados por camada, cada um no seu hardware.",
    "in2.t": "Memória sob vigilância", "in2.d": "Semanas rodando sem vazamentos. Heap monitorado a cada ciclo, logs de eventos em LittleFS e retomada segura mesmo após crash.",
    "in3.t": "Web no chip", "in3.d": "A interface completa vive comprimida dentro do firmware. É por isso que você vai gravá-la agora em um único arquivo.",
    "how.kicker": "Simples assim", "how.title": "Três passos. Zero complicação.",
    "s1.t": "Escolha seu controlador", "s1.d": "ESP8266 (Wemos D1 Mini), ESP32-C3 Super Mini ou ESP32-C5 MINI V1.0.",
    "s2.t": "Conecte pelo USB", "s2.d": "Ligue o cabo de dados ao computador. Sem drivers extras no Windows, Linux ou macOS.",
    "s3.t": "Clique e grave", "s3.d": "A página detecta o chip, baixa o firmware do GitHub e grava direto no seu controlador.",
    "fl.kicker": "Web Flasher", "fl.title": "Grave o firmware direto no seu controlador.",
    "fl.sub": "Tudo acontece no seu navegador — o firmware vem daqui do GitHub e vai para o chip pela porta USB. Nada de arquivos, nada de drivers.",
    "fl.step0": "2. Selecione a versão",
    "fl.step1": "1. Selecione o controlador",
    "fl.stepMode": "3. Modo de gravação",
    "fl.hintMode": "selecione o modo de gravação antes de gravar",
    "fl.modeFull": "Completo (firmware + filesystem)",
    "fl.modeFw": "Somente firmware (preservar dados)",
    "fl.verLatest": "(última)",
    "fl.verStable": "(estável)",
    "hw.esp12e": "1× Xtensa LX106 32-bit @ 160 MHz\nSRAM 160 KB · Flash 4 MB SPI\nWiFi 802.11 b/g/n · 2,4 GHz\n11 GPIO · 1× ADC 10-bit\nI²C / SPI / UART / OneWire / PWM\nmicro-USB (CH340) · alimentação 5V/3,3V",
    "hw.esp32c3": "1× RISC-V 32-bit @ 160 MHz\nSRAM 400 KB · Flash 4 MB\nWiFi b/g/n + Bluetooth 5 LE\n~22 GPIO · 2× ADC 12-bit\nI²C / SPI / UART / OneWire / PWM / RMT\nUSB-C nativo (USB-Serial/JTAG)",
    "hw.esp32c5": "1× RISC-V 32-bit @ 240 MHz + LP core\nSRAM 400+ KB · Flash 4 MB\nWiFi 6 (802.11ax) dual-band 2,4/5 GHz\nBluetooth 5 LE · IEEE 802.15.4\nGPIO · ADC 12-bit · I²C/SPI/UART/PWM\nUSB-C nativo (USB-Serial/JTAG)",
    "bd.cpu": "Processador", "bd.ram": "Memória", "bd.net": "Conectividade",
    "bd.rel": "índice comparado ao Wemos (base 100%)",
    "fl.term": "console • esptool.js", "fl.cta": "Conectar e gravar",
    "fl.clear": "Limpar",
    "fl.needMode": "Selecione um modo de gravação para habilitar o botão",
    "fl.fullHint": "Imagem única — grava tudo na flash",
    "fl.n1t": "Compatível com:", "fl.n1": "Chrome, Edge, Opera e Firefox (desktop) no Windows, Linux e macOS.",
    "fl.n2t": "Atenção:", "fl.n2": "use um cabo de dados (não só de carga). O Safari e celulares não suportam gravação serial pelo navegador.",
    "fl.ok": "Entendi",
    "fl.port.t": "Conectar a porta USB",
    "fl.port.d": "Conecte o controlador ao computador e escolha a porta USB que ele usa.",
    "fl.port.pick": "Escolher porta USB…",
    "fl.port.cancel": "Cancelar",
    "fl.port.none": "Nenhuma porta encontrada — confira o cabo e o driver do controlador.",
    "fl.port.reconnect": "Conecte novamente a porta USB para continuar.",
    "fl.done.t": "Gravação concluída!",
    "fl.done.d": "Desligue e ligue o microcontrolador novamente para que o firmware inicie corretamente.",
    "foot.manual": "Manual", "foot.guide": "Guia rápido",
    "foot.legal": "BrewBOSS é gratuito para uso pessoal e não comercial. Não é open-source — veja a licença completa no repositório."
  },
  "en": {
    "nav.features": "Features", "nav.innovation": "Innovation", "nav.how": "How it works",
    "nav.flash": "Web Flasher",
    "hero.pill": "Official Web Flasher",
    "hero.title1": "Your brew day.", "hero.title2": "Under absolute command.",
    "hero.sub": "BrewBOSS is a precision brewing controller that runs on ESP8266, ESP32-C3 and ESP32-C5 — with smart PID, DS18B20 sensors, pro recipes and a web UI embedded right in the firmware.",
    "hero.cta": "Flash the firmware now", "hero.cta2": "Explore the project",
    "hero.c1": "controllers", "hero.c2": "languages", "hero.c3": "sensors", "hero.c4": "extra drivers",
    "feat.kicker": "Made for brewers", "feat.title": "Full control of your brew, in a tiny chip.",
    "feat.sub": "Every feature was designed for those who take precision seriously — without sacrificing simplicity.",
    "feat1.t": "Smart PID", "feat1.d": "Holds the target temperature precisely, trimming heater power in real time during mash and boil.",
    "feat2.t": "Pro recipes", "feat2.d": "Imports BeerXML, Brewfather and BeerSmith. Mash, boil and hop-addition steps neatly organized and editable.",
    "feat3.t": "DS18B20 sensors", "feat3.d": "Multiple temperature sensors with auto addressing and per-sensor offset calibration — mash, sparge and boil.",
    "feat4.t": "Embedded web UI", "feat4.d": "A full dashboard inside the firmware. WiFi control, recipes, logs and settings — nothing to install.",
    "feat5.t": "Actuators & alarms", "feat5.d": "Heater with power control, recirculation pump, buzzer and PAUSE, RESUME and SKIP at your fingertips.",
    "feat6.t": "Smart recovery", "feat6.d": "Power drops mid-brew? BrewBOSS resumes exactly where it stopped. Your data survives outages.",
    "inno.kicker": "Engineering", "inno.title": "Lab-grade firmware, handcrafted.",
    "inno.sub": "Layered architecture, lean code and a rare obsession with memory tuning and stability.",
    "in1.t": "Truly multi-platform", "in1.d": "One codebase, four targets. ESP8266, ESP32, ESP32-C3 and the brand-new ESP32-C5 — pins and peripherals isolated per layer, each on its own hardware.",
    "in2.t": "Memory under watch", "in2.d": "Weeks of uptime with zero leaks. Heap monitored every cycle, event logs on LittleFS and safe resume even after a crash.",
    "in3.t": "The web lives in the chip", "in3.d": "The complete UI lives compressed inside the firmware. That is why you can flash it right now as a single file.",
    "how.kicker": "That simple", "how.title": "Three steps. Zero hassle.",
    "s1.t": "Pick your controller", "s1.d": "ESP8266 (Wemos D1 Mini), ESP32-C3 Super Mini or ESP32-C5 MINI V1.0.",
    "s2.t": "Plug it in via USB", "s2.d": "Connect a data cable to your computer. No extra drivers on Windows, Linux or macOS.",
    "s3.t": "Click and flash", "s3.d": "The page detects the chip, downloads the firmware from GitHub and flashes it straight to your controller.",
    "fl.kicker": "Web Flasher", "fl.title": "Flash the firmware straight into your controller.",
    "fl.sub": "Everything happens in your browser — the firmware comes from this GitHub page and goes to the chip over USB. No files, no drivers.",
    "fl.step0": "2. Choose the version",
    "fl.step1": "1. Select the controller",
    "fl.stepMode": "3. Flash mode",
    "fl.hintMode": "select the flash mode before flashing",
    "fl.modeFull": "Full (firmware + filesystem)",
    "fl.modeFw": "Firmware only (keep data)",
    "fl.verLatest": "(latest)",
    "fl.verStable": "(stable)",
    "hw.esp12e": "1× Xtensa LX106 32-bit @ 160 MHz\nSRAM 160 KB · Flash 4 MB SPI\nWiFi 802.11 b/g/n · 2.4 GHz\n11 GPIO · 1× ADC 10-bit\nI²C / SPI / UART / OneWire / PWM\nmicro-USB (CH340) · 5V/3.3V power",
    "hw.esp32c3": "1× RISC-V 32-bit @ 160 MHz\nSRAM 400 KB · Flash 4 MB\nWiFi b/g/n + Bluetooth 5 LE\n~22 GPIO · 2× ADC 12-bit\nI²C / SPI / UART / OneWire / PWM / RMT\nnative USB-C (USB-Serial/JTAG)",
    "hw.esp32c5": "1× RISC-V 32-bit @ 240 MHz + LP core\nSRAM 400+ KB · Flash 4 MB\nWiFi 6 (802.11ax) dual-band 2.4/5 GHz\nBluetooth 5 LE · IEEE 802.15.4\nGPIO · ADC 12-bit · I²C/SPI/UART/PWM\nnative USB-C (USB-Serial/JTAG)",
    "bd.cpu": "Processor", "bd.ram": "Memory", "bd.net": "Connectivity",
    "bd.rel": "index vs the Wemos (baseline 100%)",
    "fl.term": "console • esptool.js", "fl.cta": "Connect and flash",
    "fl.clear": "Clear",
    "fl.needMode": "Select a flash mode to enable the button",
    "fl.fullHint": "Single image — flashes the whole flash",
    "fl.n1t": "Compatible with:", "fl.n1": "Chrome, Edge, Opera and Firefox (desktop) on Windows, Linux and macOS.",
    "fl.n2t": "Heads up:", "fl.n2": "use a data cable (not a charge-only one). Safari and phones don't support browser-based serial flashing.",
    "fl.ok": "Got it",
    "fl.port.t": "Connect to the USB port",
    "fl.port.d": "Plug the controller into the computer and pick the USB port it is using.",
    "fl.port.pick": "Choose USB port…",
    "fl.port.cancel": "Cancel",
    "fl.port.none": "No port found — check the cable and the controller driver.",
    "fl.port.reconnect": "Reconnect the USB port to continue.",
    "fl.done.t": "Flashing complete!",
    "fl.done.d": "Power the controller off and back on so the firmware boots correctly.",
    "foot.manual": "Manual", "foot.guide": "Quick guide",
    "foot.legal": "BrewBOSS is free for personal, non-commercial use. It is not open-source — see the full license in the repository."
  }
};

const CATALOG_CANDIDATES = [
  "../binaries/flasher/manifest.json",
  "./manifest.json",
  "https://raw.githubusercontent.com/rampanelli/BrewBOSS/main/binaries/flasher/manifest.json"
];

// Catalogo fallback (mesma estrutura do manifest.json publicado).
const CATALOG_DEFAULT = {
  home: "https://github.com/rampanelli/BrewBOSS",
  latest: "2.2.26b",
  stable: ["2.2.25s", "2.2.26a"],
  versions: [
    {
      version: "2.2.25s",
      boards: [
        { id: "esp12e", name: "ESP8266 / Wemos D1 Mini (ESP12E)", chip: "esp8266",
          flash: { mode: "dio", freq: "40m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.25s_esp12e_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.25s_esp12e_fw.bin", offset: 0 }, single: false },
        { id: "esp32c3", name: "ESP32-C3 Super Mini", chip: "esp32c3",
          flash: { mode: "qio", freq: "80m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.25s_esp32c3_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.25s_esp32c3_fw.bin", offset: 0x10000 }, single: false }
      ]
    },
    {
      version: "2.2.26a",
      boards: [
        { id: "esp12e", name: "ESP8266 / Wemos D1 Mini (ESP12E)", chip: "esp8266",
          flash: { mode: "dio", freq: "40m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.26a_esp12e_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.26a_esp12e_fw.bin", offset: 0 }, single: false },
        { id: "esp32c3", name: "ESP32-C3 Super Mini", chip: "esp32c3",
          flash: { mode: "qio", freq: "80m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.26a_esp32c3_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.26a_esp32c3_fw.bin", offset: 0x10000 }, single: false },
        { id: "esp32c5", name: "ESP32-C5 MINI V1.0", chip: "esp32c5",
          flash: { mode: "qio", freq: "80m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.26a_esp32c5_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.26a_esp32c5_fw.bin", offset: 0xE000 }, single: false }
      ]
    },
    {
      version: "2.2.26b",
      boards: [
        { id: "esp12e", name: "ESP8266 / Wemos D1 Mini (ESP12E)", chip: "esp8266",
          flash: { mode: "dio", freq: "40m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.26b_esp12e_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.26b_esp12e_fw.bin", offset: 0 }, single: false },
        { id: "esp32c3", name: "ESP32-C3 Super Mini", chip: "esp32c3",
          flash: { mode: "qio", freq: "80m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.26b_esp32c3_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.26b_esp32c3_fw.bin", offset: 0x10000 }, single: false },
        { id: "esp32c5", name: "ESP32-C5 MINI V1.0", chip: "esp32c5",
          flash: { mode: "qio", freq: "80m", size: "4MB" },
          full: { file: "BrewBOSS_v2.2.26b_esp32c5_full.bin", offset: 0 },
          fw: { file: "BrewBOSS_v2.2.26b_esp32c5_fw.bin", offset: 0xE000 }, single: false }
      ]
    }
  ]
};

const boardIcons = {
  // ESP-12E / Wemos D1 Mini: modulo com shield metalico e antena serrilhada exposta.
  esp12e: '<svg viewBox="0 0 46 62" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="3" y="2" width="40" height="58" rx="3"/>' +
    '<path d="M9 4v10M15 4v10M21 4v10M27 4v10M33 4v10M39 4v10"/>' +
    '<rect x="7" y="20" width="32" height="30" rx="2"/>' +
    '<path d="M7 27h32M7 35h32M7 43h32"/>' +
    '<path d="M12 58v2M19 58v2M26 58v2M33 58v2"/>' +
    '</svg>',
  // ESP32-C3 Super Mini: placa compacta, chip central quadrado e USB-C na borda.
  esp32c3: '<svg viewBox="0 0 46 56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="3" y="2" width="40" height="52" rx="3"/>' +
    '<rect x="14" y="2" width="18" height="7" rx="2"/>' +
    '<rect x="12" y="22" width="22" height="20" rx="2"/>' +
    '<path d="M12 29h22M12 35h22"/>' +
    '<circle cx="23" cy="26" r="1.1"/>' +
    '<path d="M3 20v6M3 32v6M43 20v6M43 32v6"/>' +
    '<path d="M14 46h4M28 46h4"/>' +
    '</svg>',
  // ESP32-C5 MINI: placa com chip maior, USB-C e antena de banda dupla.
  esp32c5: '<svg viewBox="0 0 46 56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="3" y="2" width="40" height="52" rx="3"/>' +
    '<rect x="15" y="2" width="16" height="7" rx="2"/>' +
    '<path d="M7 12l3 5 3-5 3 5 3-5 3 5"/>' +
    '<rect x="10" y="24" width="26" height="20" rx="2"/>' +
    '<path d="M10 30h26M10 36h26M10 42h26"/>' +
    '<circle cx="23" cy="27" r="1.1"/>' +
    '<path d="M3 24v6M3 38v4M43 24v6M43 38v4"/>' +
    '</svg>'
};

// Indice comparativo de cada controlador em relacao ao Wemos D1 Mini
// (ESP8266 = base 100). Valores aproximados para divulgacao/comparacao.
const BOARD_PERF = {
  esp12e: { cpu: 100, ram: 100, net: 100 },
  esp32c3: { cpu: 180, ram: 650, net: 200 },
  esp32c5: { cpu: 420, ram: 900, net: 600 }
};
const PERF_METRICS = [
  { key: "cpu", label: "PROC" },
  { key: "ram", label: "MEM" },
  { key: "net", label: "CONECT" }
];

let catalog = CATALOG_DEFAULT;
let boardIndex = {};            // boardId -> { id,name,chip,flash, versions: { version -> {full,fw,single} } }
let currentLang = (location.search.match(/[?&]lang=(en|pt-BR)/) || [])[1] || "pt-BR";
let currentVersion = null;
let selected = null;
let mode = null;
let busy = false;
let portOpen = null;
let savedPort = null;           // porta USB ja autorizada (reusa em gravacoes seguidas)
let portResolve = null;         // resolve da promessa do modal de porta

function rebuildBoardIndex() {
  const idx = {};
  (catalog.versions || []).forEach((v) => {
    (v.boards || []).forEach((b) => {
      let e = idx[b.id];
      if (!e) e = idx[b.id] = { id: b.id, name: b.name, chip: b.chip, flash: b.flash, versions: {} };
      e.versions[v.version] = { full: b.full, fw: b.fw, single: !!b.single };
    });
  });
  boardIndex = idx;
  return idx;
}

const $ = (id) => document.getElementById(id);

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  $("langBtn").textContent = lang === "pt-BR" ? "EN" : "PT";
}

$("langBtn").addEventListener("click", () => setLang(currentLang === "pt-BR" ? "en" : "pt-BR"));

function log(msg, cls) {
  const el = $("log");
  const line = document.createElement("div");
  if (cls) line.className = cls;
  line.textContent = msg;
  el.appendChild(line);
  el.scrollTop = el.scrollHeight;
  const cap = 400;
  while (el.childElementCount > cap) el.removeChild(el.firstChild);
}

function clearLog() {
  const el = $("log");
  if (el) el.innerHTML = "";
}

function setStatus(state) {
  const s = $("connStatus");
  s.textContent = state;
  s.className = "status " + (state === "OK" ? "on" : state === "erro" ? "err" : "");
}

function setProgress(p) {
  $("bar").style.width = p + "%";
  $("pct").textContent = p.toFixed(0) + "%";
}

// Filtra saida do esptool-js: no C3/C5 (USB-Serial/JTAG nativo) a leitura do
// Flash ID retorna 0 e o esptool emite um WARNING falso ("flash nao responde").
function logLine(data) {
  let s = String(data == null ? "" : data).trimEnd();
  if (/WARNING:\s*Failed to communicate with the flash chip/i.test(s)) {
    log("Flash ID nao legivel por USB nativo (esperado no C3/C5) - aviso falso do esptool. A gravacao prossegue normalmente.", "ok");
    return;
  }
  if (/^Flash ID:\s*0/i.test(s)) {
    log("Flash ID: via USB nativo (nao exposto)", "sys");
    return;
  }
  log(s, "sys");
}

function boardIds() {
  return Object.keys(boardIndex);
}

function boardVersions(id) {
  const e = boardIndex[id];
  return e ? Object.keys(e.versions) : [];
}

function availableVersions() {
  return (catalog.versions || []).map((v) => v.version);
}

function versionLabel(v) {
  const dict = I18N[currentLang] || I18N["pt-BR"];
  const tag = v === catalog.latest ? " " + dict["fl.verLatest"]
            : (catalog.stable || []).indexOf(v) >= 0 ? " " + dict["fl.verStable"] : "";
  return v + tag;
}

async function loadCatalog() {
  for (const url of CATALOG_CANDIDATES) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) continue;
      catalog = await r.json();
      rebuildBoardIndex();
      return;
    } catch (e) { /* next */ }
  }
  catalog = CATALOG_DEFAULT;
  rebuildBoardIndex();
}

function renderVersions() {
  const sel = $("versionSel");
  sel.innerHTML = "";
  // So mostra versoes que suportam a placa escolhida.
  const vers = selected ? boardVersions(selected) : [];
  if (vers.length === 0) {
    const o = document.createElement("option");
    o.value = "";
    o.textContent = "—";
    o.disabled = true;
    sel.appendChild(o);
    return;
  }
  const og = document.createElement("optgroup");
  og.label = "BrewBOSS";
  vers.forEach((v) => {
    const o = document.createElement("option");
    o.value = v;
    o.textContent = versionLabel(v);
    if (v === currentVersion) o.selected = true;
    og.appendChild(o);
  });
  sel.appendChild(og);
}

function selectVersion(ver) {
  if (!selected || !ver) return;
  if (boardVersions(selected).indexOf(ver) < 0) return;
  currentVersion = ver;
  mode = null;
  renderVersions();
  renderMode();
}

function renderBoards() {
  const wrap = $("boards");
  wrap.innerHTML = "";
  const dict = I18N[currentLang] || I18N["pt-BR"];
  boardIds().forEach((bid) => {
    const b = boardIndex[bid];
    const label = document.createElement("button");
    label.type = "button";
    label.className = "board" + (selected === b.id ? " sel" : "");
    const specs = String(dict["hw." + b.id] || "").split("\n");
    const perf = BOARD_PERF[b.id] || { cpu: 0, ram: 0, net: 0 };
    const maxPerf = { cpu: 1, ram: 1, net: 1 };
    ["cpu", "ram", "net"].forEach((k) => {
      Object.keys(BOARD_PERF).forEach((id) => {
        if (BOARD_PERF[id][k] > maxPerf[k]) maxPerf[k] = BOARD_PERF[id][k];
      });
    });
    const bars = PERF_METRICS.map((m) => {
      const v = perf[m.key];
      const w = Math.max(2, Math.round((v / maxPerf[m.key]) * 100));
      return (
        '<span class="pbar-row">' +
        '<span class="pbar-l">' + m.label + "</span>" +
        '<span class="pbar-track"><span class="pbar-fill" style="width:' + w + '%"></span></span>' +
        '<span class="pbar-v">' + v + "%</span>" +
        "</span>"
      );
    }).join("");
    label.innerHTML =
      '<div class="b-head">' +
        '<div class="b-ico" aria-hidden="true">' + (boardIcons[b.id] || "") + "</div>" +
        '<div class="b-model">' +
          "<h4>" + b.name + "</h4>" +
          '<p class="b-sub">' + (b.chip || b.id).toUpperCase() + "</p>" +
        "</div>" +
      "</div>" +
      '<div class="b-specs">' + specs.map((s) => "<span>" + s + "</span>").join("") + "</div>" +
      '<div class="pbar-wrap" title="' + (dict["bd.rel"] || "") + '">' + bars + "</div>" +
      '<p class="b-rel">' + (dict["bd.rel"] || "") + "</p>";
    label.addEventListener("click", () => selectBoard(b.id));
    wrap.appendChild(label);
  });
  renderHint();
}

function renderHint() {
  const hint = $("versionHint");
  if (!hint) return;
  const dict = I18N[currentLang] || I18N["pt-BR"];
  const board = selectedBoard();
  const need = board && !isSingleImage(board) && !mode;
  hint.innerHTML = '<span class="ver-tag">BrewBOSS v' + (currentVersion || "—") + "</span>" +
    (need ? '<span class="hint-warn">' + (dict["fl.hintMode"] || "") + "</span>" : "");
}

function selectedBoard() {
  if (!selected || !currentVersion) return null;
  const b = boardIndex[selected];
  if (!b) return null;
  const entry = b.versions[currentVersion];
  if (!entry) return null;
  return { id: b.id, name: b.name, chip: b.chip, flash: b.flash, full: entry.full, fw: entry.fw, single: entry.single };
}

function selectBoard(id) {
  selected = id;
  mode = null;
  // Mantem a versao escolhida se a nova placa ainda a suporta; senao, usa a
  // ultima versao disponivel para ela (evita "a versao muda sozinha").
  const vers = boardVersions(id);
  const keep = currentVersion && vers.indexOf(currentVersion) >= 0;
  currentVersion = keep ? currentVersion
    : (catalog.latest && vers.indexOf(catalog.latest) >= 0)
      ? catalog.latest
      : vers[vers.length - 1] || null;
  renderBoards();
  renderVersions();
  renderMode();
}

function isSingleImage(board) {
  return !board || board.single || !board.fw;
}

function updateFlashBtn() {
  const board = selectedBoard();
  $("flashBtn").disabled = !board || (!isSingleImage(board) && !mode);
}

function renderMode() {
  const board = selectedBoard();
  const wrap = $("modeWrap");
  const alert = $("modeAlert");
  const radios = Array.from(document.querySelectorAll('input[name="flashMode"]'));
  const dict = I18N[currentLang] || I18N["pt-BR"];
  const note = wrap && wrap.querySelector(".mode-note");

  if (isSingleImage(board)) {
    mode = "full";
    radios.forEach((r) => { r.disabled = true; r.checked = r.value === "full"; });
    if (wrap) wrap.classList.remove("need-mode");
    if (alert) alert.hidden = true;
    if (board && wrap && !note) {
      const n = document.createElement("div");
      n.className = "mode-note";
      n.textContent = dict["fl.fullHint"];
      wrap.appendChild(n);
    }
  } else {
    radios.forEach((r) => { r.disabled = false; });
    if (note) note.remove();
    if (mode === "full" || mode === "fw") {
      radios.forEach((r) => { r.checked = r.value === mode; });
      if (wrap) wrap.classList.remove("need-mode");
      if (alert) alert.hidden = true;
    } else {
      mode = null;
      radios.forEach((r) => { r.checked = false; });
      if (wrap) wrap.classList.add("need-mode");
      if (alert) { alert.hidden = false; alert.textContent = dict["fl.needMode"]; }
    }
  }
  updateFlashBtn();
  renderHint();
}

function activeRadio() {
  const r = document.querySelector('input[name="flashMode"]:checked');
  return r ? r.value : null;
}

document.addEventListener("change", (e) => {
  if (e.target && e.target.name === "flashMode") {
    mode = e.target.value;
    renderMode();
  }
});

function flashTarget(board) {
  if (mode === "fw" && board && !board.single && board.fw) return board.fw;
  return board.full;
}

function flashPath(board) {
  const t = flashTarget(board);
  return "../binaries/flasher/" + t.file;
}

async function fetchBin(url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error("HTTP " + r.status + " ao baixar " + url);
  const buf = await r.arrayBuffer();
  return new Uint8Array(buf);
}

function normalizeChip(name) {
  return String(name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function flashFlow() {
  if (busy || !selected) return;
  const board = selectedBoard();
  if (!board) return;

  if (!navigator.serial) {
    log("Web Serial nao suportado neste navegador. Use Chrome/Edge/Opera/Firefox no desktop.", "err");
    return;
  }

  const onlyFull = board.single || !board.fw;
  mode = onlyFull ? "full" : activeRadio();
  if (!mode) {
    log("selecione o modo de gravação (passo 3) antes de gravar.", "warn");
    return;
  }

  busy = true;
  $("flashBtn").disabled = true;
  $("flashBtnLabel").textContent = "Gravando...";
  setProgress(0);
  clearLog();
  log("== BrewBOSS Web Flasher v" + currentVersion + " ==", "sys");
  log("placa selecionada: " + board.name);

  let port = null;
  let transport = null;
  let loader = null;
  try {
    // 1) Conexao: SEMPRE pede a porta no modal (escolha explicita do usuario).
    // Se o usuario ja autorizou portas antes, elas aparecem listadas no modal e
    // podem ser selecionadas num clique; "Escolher porta USB..." abre o seletor
    // nativo. Nunca auto-selecionamos porta (evita gravar no controlador errado
    // quando ha mais de um conectado).
    const terminal = {
      clean() {},
      write(data) { logLine(data); },
      writeLine(data) { logLine(data); }
    };
    port = await acquirePort();
    if (!port) { log("seleção de porta cancelada.", "warn"); return; }
    portOpen = port;
    transport = new Transport(port, true);
    loader = new ESPLoader({ transport, baudrate: 115200, terminal, debugLogging: false });
    log("conectando e identificando o chip...", "sys");
    setStatus("...");
    try {
      await loader.main();
    } catch (connErr) {
      // Apos um reset, o chip reenumera a USB e a porta recem-escolhida pode
      // ficar momentaneamente indisponivel. Tenta reabrir a MESMA porta via
      // getPorts() (objeto atual) algumas vezes antes de pedir nova escolha.
      const msg = connErr && connErr.message ? String(connErr.message) : String(connErr);
      const isOpenFail = /failed to open serial port/i.test(msg) || /Failed to open/i.test(msg);
      if (isOpenFail) {
        let reopened = false;
        for (let i = 0; i < 3 && !reopened; i++) {
          log("porta ocupada/reconectando — tentando novamente... (" + (i + 1) + "/3)", "warn");
          await delay(1600 * (i + 1));
          const fresh = await refreshGrantedPort(port);
          if (!fresh) continue;
          try {
            if (transport) { try { await transport.disconnect(); } catch (e) { /* ignore */ } }
            savedPort = fresh;
            port = fresh;
            portOpen = fresh;
            transport = new Transport(port, true);
            loader = new ESPLoader({ transport, baudrate: 115200, terminal, debugLogging: false });
            await loader.main();
            reopened = true;
          } catch (e2) { /* tenta de novo */ }
        }
        if (!reopened) {
          // Desistiu: deixa o usuario escolher outra porta no modal.
          log("nao foi possivel reabrir a porta automaticamente — selecione novamente.", "warn");
          port = await acquirePort();
          if (!port) { log("seleção de porta cancelada.", "warn"); return; }
          portOpen = port;
          transport = new Transport(port, true);
          loader = new ESPLoader({ transport, baudrate: 115200, terminal, debugLogging: false });
          await loader.main();
        }
      } else {
        throw connErr;
      }
    }

    const chipName = loader.chip ? loader.chip.CHIP_NAME : "?";
    const detected = chipName;

    const det = normalizeChip(chipName);
    const want = normalizeChip(board.chip);
    log("chip detectado: " + chipName, "ok");
    if (det !== want) {
      log("ERRO: chip " + detected + " nao corresponde a placa " + board.chip + ".", "err");
      log("Desconecte e selecione a placa correta.", "err");
      setStatus("erro");
      await loader.after("hard_reset");
      return;
    }

    const target = flashTarget(board);
    log((mode === "fw" ? "baixando firmware (somente app, preserva dados)" : "baixando imagem completa do GitHub") + "...", "sys");
    const data = await fetchBin(flashPath(board));
    log("recebido " + (data.length / 1024).toFixed(0) + " KB", "ok");
    setStatus("OK");

    const fm = board.flash || { mode: "qio", freq: "80m", size: "4MB" };
    const off = target ? (target.offset || 0) : 0;
    const eraseAll = mode !== "fw";
    log("gravando em 0x" + off.toString(16).padStart(6, "0") + " (" + fm.size + ", " + fm.mode + ")" + (eraseAll ? " [erase all]" : " [preserva dados]") + " ...", "sys");

    await loader.writeFlash({
      fileArray: [{ data, address: off }],
      flashMode: fm.mode,
      flashFreq: fm.freq,
      flashSize: fm.size,
      eraseAll: eraseAll,
      compress: true,
      reportProgress(fi, written, total) {
        const p = total ? (written / total) * 100 : 0;
        setProgress(p);
      }
    });

    setProgress(100);
    log("gravacao concluida com sucesso!", "ok");
    log("reiniciando o controlador...", "sys");
    try { await loader.after("hard_reset"); } catch (e) { log("reset por software nao disponivel — religue manualmente.", "warn"); }
    log("pronto! Se o firmware nao iniciar sozinho, desligue e ligue o controlador.", "ok");
    hideDoneModal();
    scheduleDoneModal();
  } catch (err) {
    setStatus("erro");
    log("erro: " + (err && err.message ? err.message : err), "err");
  } finally {
    try { if (transport) await transport.disconnect(); } catch (e) { /* ignore */ }
    portOpen = null;
    busy = false;
    updateFlashBtn();
    $("flashBtnLabel").textContent = currentLang === "pt-BR" ? "Conectar e gravar" : "Connect and flash";
  }
}

$("flashBtn").addEventListener("click", flashFlow);
$("versionSel").addEventListener("change", (e) => selectVersion(e.target.value));
$("clearLog").addEventListener("click", clearLog);

// ---- Selecao de porta USB em modal estilizado ----
// requestPort() so pode ser chamado dentro de um clique do usuario (gesto);
// chama-lo apos awaits faz o navegador rejeitar com "No port selected".
// Por isso abrimos um modal proprio: o clique em "Escolher porta USB..." dispara
// o seletor nativo na hora, e a porta escolhida fica salva para as proximas
// gravacoes (evita o erro na 2a gravacao sem refresh).

let pendingPortResolve = null;

function hidePortModal() {
  const m = $("portModal");
  if (m) m.hidden = true;
}

function showPortMsg(keyOrText, asText) {
  const el = $("portMsg");
  if (!el) return;
  if (asText) { el.textContent = keyOrText; }
  else {
    const dict = I18N[currentLang] || I18N["pt-BR"];
    el.textContent = dict[keyOrText] || keyOrText;
  }
  el.hidden = false;
}

function renderPortList(ports) {
  const list = $("portList");
  if (!list) return;
  list.innerHTML = "";
  const dict = I18N[currentLang] || I18N["pt-BR"];
  if (!ports || !ports.length) {
    const empty = document.createElement("div");
    empty.className = "port-empty";
    empty.textContent = dict["fl.port.none"] || "Nenhuma porta encontrada.";
    list.appendChild(empty);
    return;
  }
  const recent = savedPort && savedPort.getInfo ? savedPort.getInfo() : null;
  ports.forEach((p) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "port-item";
    const info = (p && p.getInfo ? p.getInfo() : null) || {};
    const isRecent = recent && info.usbVendorId === recent.usbVendorId && info.usbProductId === recent.usbProductId;
    const name = [info.usbVendorId, info.usbProductId].filter(Boolean).length
      ? "USB 0x" + (info.usbVendorId || 0).toString(16) + ":" + (info.usbProductId || 0).toString(16)
      : dict["fl.port.usb"] || "Porta USB";
    b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 6h4M10 18h4"/></svg>' +
      "<span>" + name + (isRecent ? " (recente)" : "") + "</span>";
    b.addEventListener("click", () => resolvePort(p));
    list.appendChild(b);
  });
}

function openPortModal() {
  const m = $("portModal");
  if (!m) return;
  const msg = $("portMsg");
  if (msg) msg.hidden = true;
  m.hidden = false;
  navigator.serial.getPorts()
    .then((ports) => renderPortList(ports || []))
    .catch(() => renderPortList([]));
}

function resolvePort(p) {
  savedPort = p;
  hidePortModal();
  if (pendingPortResolve) { const r = pendingPortResolve; pendingPortResolve = null; r(p); }
}

function cancelPortPick() {
  hidePortModal();
  if (pendingPortResolve) { const r = pendingPortResolve; pendingPortResolve = null; r(null); }
}

// Sempre abre o modal para o USUARIO escolher a porta (nunca auto-seleciona):
// assim, quando ha mais de um controlador conectado, grava-se no certo.
function acquirePort() {
  return new Promise((resolve) => {
    pendingPortResolve = resolve;
    openPortModal();
  });
}

// Apos um reset o chip reenumera a USB e o objeto de porta fica obsoleto.
// Busca uma porta autorizada "fresca" equivalente (mesmo VID/PID) para tentar
// reabrir sem incomodar o usuario de novo.
async function refreshGrantedPort(like) {
  try {
    const list = await navigator.serial.getPorts();
    if (!list || !list.length) return null;
    if (!like) return list[0];
    const gi = like.getInfo ? like.getInfo() : null;
    const match = list.find((p) => {
      if (!gi || !p.getInfo) return false;
      const g = p.getInfo();
      return g.usbVendorId === gi.usbVendorId && g.usbProductId === gi.usbProductId;
    });
    return match || null;
  } catch (e) {
    return null;
  }
}

$("portPick").addEventListener("click", async () => {
  try {
    const p = await navigator.serial.requestPort();
    resolvePort(p);
  } catch (e) {
    // Usuario cancelou o seletor nativo — mantem o modal aberto com aviso.
    showPortMsg("fl.port.reconnect");
  }
});
$("portCancel").addEventListener("click", cancelPortPick);

let doneTimer = null;

function showDoneModal() {
  const m = $("doneModal");
  if (m) m.hidden = false;
}

function hideDoneModal() {
  const m = $("doneModal");
  if (m) m.hidden = true;
  if (doneTimer) { clearTimeout(doneTimer); doneTimer = null; }
}

$("doneOk").addEventListener("click", hideDoneModal);

// Apos a gravacao, muitos chips/adaptadores nao resetam de forma confiavel por
// software (ex: CH340 + ESP8266). Mostramos um aviso 5s depois dos 100% para o
// usuario religar o controlador manualmente.
function scheduleDoneModal() {
  if (doneTimer) clearTimeout(doneTimer);
  doneTimer = setTimeout(showDoneModal, 5000);
}

setLang(currentLang);
loadCatalog().then(() => {
  // Novo fluxo: seleciona-se primeiro o controlador; o combo de versao passa a
  // mostrar somente as versoes que suportam aquela placa (sem troca automatica).
  const latest = catalog.latest ||
    (catalog.versions && catalog.versions[0] && catalog.versions[0].version) || null;
  const ids = boardIds();
  const first = ids.find((id) => latest && boardVersions(id).indexOf(latest) >= 0) || ids[0];
  selectBoard(first);
});
