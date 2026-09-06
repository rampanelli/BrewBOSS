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
    "fl.step0": "1. Selecione a versão do firmware",
    "fl.step1": "2. Selecione a placa",
    "fl.stepMode": "3. Modo de gravação",
    "fl.modeFull": "Completo (firmware + filesystem)",
    "fl.modeFw": "Somente firmware (preservar dados)",
    "fl.verLatest": "(última)",
    "fl.verStable": "(estável)",
    "hw.esp12e": "Xtensa LX106 160 MHz · WiFi 802.11 b/g/n 2.4 GHz · 4 MB flash · 11 GPIO · micro-USB",
    "hw.esp32c3": "RISC-V 160 MHz · WiFi b/g/n + Bluetooth 5 LE · 4 MB flash · ~15 GPIO · USB-C nativo",
    "hw.esp32c5": "RISC-V 240 MHz · WiFi 6 dual-band 2,4/5 GHz · BT 5 LE · 802.15.4 · USB-C nativo",
    "fl.term": "console • esptool.js", "fl.cta": "Conectar e gravar",
    "fl.needMode": "Selecione um modo de gravação para habilitar o botão",
    "fl.fullHint": "Imagem única — grava tudo na flash",
    "fl.n1t": "Compatível com:", "fl.n1": "Chrome, Edge, Opera e Firefox (desktop) no Windows, Linux e macOS.",
    "fl.n2t": "Atenção:", "fl.n2": "use um cabo de dados (não só de carga). O Safari e celulares não suportam gravação serial pelo navegador.",
    "fl.ok": "Entendi",
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
    "fl.step0": "1. Choose the firmware version",
    "fl.step1": "2. Select your board",
    "fl.stepMode": "3. Flash mode",
    "fl.modeFull": "Full (firmware + filesystem)",
    "fl.modeFw": "Firmware only (keep data)",
    "fl.verLatest": "(latest)",
    "fl.verStable": "(stable)",
    "hw.esp12e": "Xtensa LX106 160 MHz · WiFi 802.11 b/g/n 2.4 GHz · 4 MB flash · 11 GPIO · micro-USB",
    "hw.esp32c3": "RISC-V 160 MHz · WiFi b/g/n + Bluetooth 5 LE · 4 MB flash · ~15 GPIO · native USB-C",
    "hw.esp32c5": "RISC-V 240 MHz · WiFi 6 dual-band 2.4/5 GHz · BT 5 LE · 802.15.4 · native USB-C",
    "fl.term": "console • esptool.js", "fl.cta": "Connect and flash",
    "fl.needMode": "Select a flash mode to enable the button",
    "fl.fullHint": "Single image — flashes the whole flash",
    "fl.n1t": "Compatible with:", "fl.n1": "Chrome, Edge, Opera and Firefox (desktop) on Windows, Linux and macOS.",
    "fl.n2t": "Heads up:", "fl.n2": "use a data cable (not a charge-only one). Safari and phones don't support browser-based serial flashing.",
    "fl.ok": "Got it",
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

let catalog = CATALOG_DEFAULT;
let currentLang = (location.search.match(/[?&]lang=(en|pt-BR)/) || [])[1] || "pt-BR";
let currentVersion = null;
let selected = null;
let mode = null;
let busy = false;
let portOpen = null;

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

function currentBoards() {
  const v = (catalog.versions || []).find((x) => x.version === currentVersion);
  return v ? v.boards || [] : [];
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
      return;
    } catch (e) { /* next */ }
  }
  catalog = CATALOG_DEFAULT;
}

function renderVersions() {
  const sel = $("versionSel");
  sel.innerHTML = "";
  (catalog.versions || []).forEach((v) => {
    const o = document.createElement("option");
    o.value = v.version;
    o.textContent = versionLabel(v.version);
    if (v.version === currentVersion) o.selected = true;
    sel.appendChild(o);
  });
}

function selectVersion(ver) {
  currentVersion = ver || currentVersion || catalog.latest;
  selected = null;
  renderVersions();
  renderBoards();
  renderMode();
}

function renderBoards() {
  const wrap = $("boards");
  wrap.innerHTML = "";
  const dict = I18N[currentLang] || I18N["pt-BR"];
  currentBoards().forEach((b) => {
    const label = document.createElement("button");
    label.type = "button";
    label.className = "board" + (selected === b.id ? " sel" : "");
    label.innerHTML =
      '<span class="b-chip">' + b.id + "</span>" +
      '<div class="b-ico" aria-hidden="true">' + (boardIcons[b.id] || "") + "</div>" +
      "<h4>" + b.name + "</h4>" +
      '<p class="b-sub">' + b.chip.toUpperCase() + "</p>" +
      '<p class="b-hw">' + (dict["hw." + b.id] || "") + "</p>";
    label.addEventListener("click", () => selectBoard(b.id));
    wrap.appendChild(label);
  });
  const hint = $("versionHint");
  hint.textContent = "BrewBOSS v" + currentVersion + " — " +
    (currentLang === "pt-BR" ? "defina o modo de gravação no passo 3 antes de clicar em gravar" : "pick the flash mode in step 3 before flashing");
}

function selectedBoard() {
  return currentBoards().find((b) => b.id === selected) || null;
}

function selectBoard(id) {
  selected = id;
  mode = null;
  renderBoards();
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
  log("== BrewBOSS Web Flasher v" + currentVersion + " ==", "sys");
  log("placa selecionada: " + board.name);

  let port = null;
  let transport = null;
  let loader = null;
  try {
    port = await navigator.serial.requestPort();
    portOpen = port;

    const terminal = {
      clean() {},
      write(data) { logLine(data); },
      writeLine(data) { logLine(data); }
    };

    transport = new Transport(port, true);
    loader = new ESPLoader({ transport, baudrate: 115200, terminal, debugLogging: false });

    log("conectando e identificando o chip...", "sys");
    setStatus("...");
    await loader.main();
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
  selectVersion(catalog.latest || (catalog.versions && catalog.versions[0] && catalog.versions[0].version) || "2.2.26b");
});
