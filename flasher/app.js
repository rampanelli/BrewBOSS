import { ESPLoader, Transport } from "./lib/esptool-js.bundle.js";

const I18N = {
  "pt-BR": {
    "nav.features": "Recursos", "nav.innovation": "Inovação", "nav.how": "Como funciona",
    "nav.flash": "Web Flasher",
    "hero.pill": "Web Flasher oficial • v2.2.26a",
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
    "fl.step1": "1. Selecione a placa", "fl.term": "console • esptool.js", "fl.cta": "Conectar e gravar",
    "fl.n1t": "Compatível com:", "fl.n1": "Chrome, Edge, Opera e Firefox (desktop) no Windows, Linux e macOS.",
    "fl.n2t": "Atenção:", "fl.n2": "use um cabo de dados (não só de carga). O Safari e celulares não suportam gravação serial pelo navegador.",
    "foot.manual": "Manual", "foot.guide": "Guia rápido",
    "foot.legal": "BrewBOSS é gratuito para uso pessoal e não comercial. Não é open-source — veja a licença completa no repositório."
  },
  "en": {
    "nav.features": "Features", "nav.innovation": "Innovation", "nav.how": "How it works",
    "nav.flash": "Web Flasher",
    "hero.pill": "Official Web Flasher • v2.2.26a",
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
    "fl.step1": "1. Select your board", "fl.term": "console • esptool.js", "fl.cta": "Connect and flash",
    "fl.n1t": "Compatible with:", "fl.n1": "Chrome, Edge, Opera and Firefox (desktop) on Windows, Linux and macOS.",
    "fl.n2t": "Heads up:", "fl.n2": "use a data cable (not a charge-only one). Safari and phones don't support browser-based serial flashing.",
    "foot.manual": "Manual", "foot.guide": "Quick guide",
    "foot.legal": "BrewBOSS is free for personal, non-commercial use. It is not open-source — see the full license in the repository."
  }
};

const MANIFEST_CANDIDATES = [
  "../binaries/flasher/manifest.json",
  "./manifest.json",
  "https://raw.githubusercontent.com/rampanelli/BrewBOSS/main/binaries/flasher/manifest.json"
];
const MANIFEST_DEFAULT = {
  version: "2.2.26a",
  boards: [
    { id: "esp12e", name: "ESP8266 / Wemos D1 Mini (ESP12E)", chip: "esp8266", flash: { mode: "dio", freq: "40m", size: "4MB" }, file: "BrewBOSS_v2.2.26a_esp12e_full.bin", offset: 0 },
    { id: "esp32c3", name: "ESP32-C3 Super Mini", chip: "esp32c3", flash: { mode: "qio", freq: "80m", size: "4MB" }, file: "BrewBOSS_v2.2.26a_esp32c3_full.bin", offset: 0 },
    { id: "esp32c5", name: "ESP32-C5 MINI V1.0", chip: "esp32c5", flash: { mode: "qio", freq: "80m", size: "4MB" }, file: "BrewBOSS_v2.2.26a_esp32c5_full.bin", offset: 0 }
  ]
};

const boardIcons = {
  esp12e: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="7" width="16" height="11" rx="2"/><path d="M8 7V4.5a1.5 1.5 0 0 1 3 0V7M13 7V4.5a1.5 1.5 0 0 1 3 0V7"/><path d="M8 13h8M8 16h5"/></svg>',
  esp32c3: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="6" width="14" height="12" rx="2"/><path d="M9 6v12M15 6v12"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="14" r="1"/></svg>',
  esp32c5: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="6" width="14" height="12" rx="2"/><path d="M8 6V4M12 6V4M16 6V4"/><circle cx="12" cy="12" r="2.4"/></svg>'
};

let manifest = MANIFEST_DEFAULT;
let currentLang = (location.search.match(/[?&]lang=(en|pt-BR)/) || [])[1] || "pt-BR";
let selected = null;
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

async function loadManifest() {
  for (const url of MANIFEST_CANDIDATES) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) continue;
      manifest = await r.json();
      return;
    } catch (e) { /* next */ }
  }
  manifest = MANIFEST_DEFAULT;
}

function renderBoards() {
  const wrap = $("boards");
  wrap.innerHTML = "";
  (manifest.boards || []).forEach((b) => {
    const label = document.createElement("button");
    label.type = "button";
    label.className = "board" + (selected === b.id ? " sel" : "");
    label.innerHTML =
      '<span class="b-chip">' + b.id + "</span>" +
      '<div style="width:44px;height:44px;margin:8px 0;color:var(--amber)">' + (boardIcons[b.id] || "") + "</div>" +
      "<h4>" + b.name + "</h4><p>" + b.chip.toUpperCase() + "</p>";
    label.addEventListener("click", () => selectBoard(b.id));
    wrap.appendChild(label);
  });
  $("versionHint").textContent = "BrewBOSS v" + manifest.version + " — firmware + filesystem em uma única imagem";
  $("flashBtn").disabled = !selected;
}

function selectBoard(id) {
  selected = id;
  renderBoards();
}

function flashPath(board) {
  return "../binaries/flasher/" + board.file;
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
  const board = (manifest.boards || []).find((b) => b.id === selected);
  if (!board) return;

  if (!navigator.serial) {
    log("Web Serial nao suportado neste navegador. Use Chrome/Edge/Opera/Firefox no desktop.", "err");
    return;
  }

  busy = true;
  $("flashBtn").disabled = true;
  $("flashBtnLabel").textContent = "Gravando...";
  setProgress(0);
  log("== BrewBOSS Web Flasher v" + manifest.version + " ==", "sys");
  log("placa selecionada: " + board.name);

  let port = null;
  let transport = null;
  let loader = null;
  try {
    port = await navigator.serial.requestPort();
    portOpen = port;

    const terminal = {
      clean() {},
      write(data) { log(String(data).trimEnd(), "sys"); },
      writeLine(data) { log(String(data).trimEnd(), "sys"); }
    };

    transport = new Transport(port, true);
    loader = new ESPLoader({ transport, baudrate: 460800, terminal, debugLogging: false });

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

    log("baixando firmware do GitHub...", "sys");
    const data = await fetchBin(flashPath(board));
    log("recebido " + (data.length / 1024).toFixed(0) + " KB", "ok");
    setStatus("OK");

    const fm = board.flash || { mode: "qio", freq: "80m", size: "4MB" };
    log("gravando em 0x" + (board.offset || 0).toString(16).padStart(6, "0") + " (" + fm.size + ", " + fm.mode + ") ...", "sys");

    await loader.writeFlash({
      fileArray: [{ data, address: board.offset || 0 }],
      flashMode: fm.mode,
      flashFreq: fm.freq,
      flashSize: fm.size,
      eraseAll: true,
      compress: true,
      reportProgress(fi, written, total) {
        const p = total ? (written / total) * 100 : 0;
        setProgress(p);
      }
    });

    setProgress(100);
    log("gravacao concluida com sucesso!", "ok");
    log("reiniciando o controlador...", "sys");
    await loader.after("hard_reset");
    log("pronto! Acesse a rede WiFi 'BrewBOSS' e abra http://192.168.4.1", "ok");
  } catch (err) {
    setStatus("erro");
    log("erro: " + (err && err.message ? err.message : err), "err");
  } finally {
    try { if (transport) await transport.disconnect(); } catch (e) { /* ignore */ }
    portOpen = null;
    busy = false;
    $("flashBtn").disabled = !selected;
    $("flashBtnLabel").textContent = currentLang === "pt-BR" ? "Conectar e gravar" : "Connect and flash";
  }
}

$("flashBtn").addEventListener("click", flashFlow);

setLang(currentLang);
loadManifest().then(() => {
  renderBoards();
});
