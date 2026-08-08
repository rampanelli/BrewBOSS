const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Load I18N from manual-i18n.js
const i18nRaw = fs.readFileSync(path.join(dir, 'manual-i18n.js'), 'utf8');
const i18nMatch = i18nRaw.match(/var I18N=(\{[\s\S]*\});/);
if (!i18nMatch) throw new Error('Could not parse I18N');
const I18N = eval('(' + i18nMatch[1] + ')');

// Load manual.html
const html = fs.readFileSync(path.join(dir, 'manual.html'), 'utf8');

function buildLang(lang) {
  const d = I18N[lang];
  if (!d) throw new Error('Language ' + lang + ' not found');

  let out = html;

  // Replace lang attribute on <html>
  out = out.replace(/<html lang="[^"]*">/, '<html lang="' + lang + '">');

  // Replace <title>
  out = out.replace(/<title>.*?<\/title>/, '<title>' + escapeHtml(d.title || 'BrewBOSS') + '</title>');

  // Remove the language <select>
  out = out.replace(/<select[^>]*id="lang"[^>]*>[\s\S]*?<\/select>/, '');

  // Replace all data-i18n elements
  // Strategy: for each [data-i18n], replace innerHTML with translated text
  const tagRegex = /<([a-zA-Z][a-zA-Z0-9]*)([^>]*)\bdata-i18n="([^"]*)"([^>]*)>([\s\S]*?)<\/\1>/g;
  
  // Collect replacements to avoid replacing inside replaced content
  const replacements = [];
  let m;
  while ((m = tagRegex.exec(out)) !== null) {
    const [fullMatch, tag, before, key, after, inner] = m;
    const translated = d[key];
    if (translated !== undefined) {
      const newTag = '<' + tag + before + after + '>' + translated + '</' + tag + '>';
      replacements.push({ old: fullMatch, new: newTag });
    }
  }

  // Apply replacements in reverse order to preserve indices
  for (let i = replacements.length - 1; i >= 0; i--) {
    const { old, new: newTag } = replacements[i];
    out = out.replace(old, newTag);
  }

  // Remove remaining data-i18n attributes (on elements that still have them, e.g., without closing tags)
  out = out.replace(/\s*data-i18n="[^"]*"/g, '');

  // Remove the <script> that loads manual-i18n.js and the inline i18n script
  out = out.replace(/<script src="manual-i18n\.js"><\/script>[\s\n]*/, '');
  out = out.replace(/<script>\s*var curLang[\s\S]*?<\/script>/, '');

  // Clean up extra blank lines
  out = out.replace(/\n{3,}/g, '\n\n');

  return out;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Build English version
const en = buildLang('en');
fs.writeFileSync(path.join(dir, 'manual_en.html'), en, 'utf8');
console.log('Wrote manual_en.html');

// Build pt-BR version
const ptBR = buildLang('pt-BR');
fs.writeFileSync(path.join(dir, 'manual_pt-BR.html'), ptBR, 'utf8');
console.log('Wrote manual_pt-BR.html');

console.log('Done.');
