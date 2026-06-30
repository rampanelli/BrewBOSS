# O que enviar para o GitHub (e o que NUNCA enviar)

Repositório: https://github.com/rampanelli/BrewBOSS.git  
Diretório local do repo: `BrewBOSS\github\`

---

## ✅ ENVIAR — Sempre

### Binários de firmware (.bin)
```
binaries/fw-esp32_v2.2.22i.bin
binaries/fw-esp32c3_v2.2.22i.bin
binaries/fw-wemos_v2.2.22i.bin
binaries/littlefs-esp32_v2.2.22i.bin
binaries/littlefs-esp32c3_v2.2.22i.bin
binaries/littlefs-wemos_v2.2.22i.bin
```
Regra: qualquer `.bin` com versão nova vai em `binaries/`.

### Site principal (raiz do repo)
```
index.html          -> redireciona para manual.html
manual.html         -> manual do usuário
manual-i18n.js      -> traduções do manual
```

### Documentação
```
README.md
LICENSE.md
CONTRIBUTING.md
```

### Página de ajuda
```
help/index.html     -> página multilíngue de ajuda
help/README.md      -> descrição, tabela de offsets, links
help/images/*.jpeg  -> screenshots da interface
```

### Imagens do manual
```
images/1.0_main.jpeg
images/1.1_step.jpeg
images/2.0_recipes.jpeg
images/2.1_mash.jpeg
images/2.2_boil.jpeg
images/3.0_settings.jpeg
images/3.1_system.jpeg
images/3.2_about.jpeg
images/4.0_themes.jpeg
images/4.1_menu.jpeg
```

---

## ❌ NUNCA ENVIAR

### Código-fonte (NUNCA — o repo é só de binários e documentação)
```
src/
lib/
lib_esp8266/
espc3/
```

### Configuração de build
```
platformio.ini
```

### Build artifacts
```
.pio/
```

### Dados locais / sensores / testes
```
test/
scripts/
brewboss-templog.csv
```

### Configurações do editor
```
.vscode/
```

---

## 📋 Exemplos

### Exemplo 1: Subir binários novos + documentação atualizada

Arquivos que vão no commit:
```
✓ binaries/fw-esp32_v2.2.22i.bin       (firmware ESP32 atualizado)
✓ binaries/littlefs-esp32_v2.2.22i.bin  (filesystem ESP32 atualizado)
✓ README.md                             (documentação revisada)
✓ help/README.md                        (offsets corrigidos)
```

Arquivos que NÃO vão:
```
✗ src/main.cpp           -> código-fonte
✗ platformio.ini         -> config de build
✗ .pio/build/...         -> artefatos de compilação
✗ data/config.json       -> dados locais
```

### Exemplo 2: Atualizar só a página de ajuda

```
✓ help/index.html
✓ help/images/1.jpeg
✓ help/images/2.jpeg
```

### Exemplo 3: Limpar repositório para nova versão

Comando (remove tudo do remoto, preserva disco local):
```
git rm -r --cached .
git commit -m "Clear published content (will re-upload updated files)"
git push origin main
```

Depois restaurar arquivos locais:
```
git checkout HEAD~1 -- .
git reset HEAD .
```

---

## 🔍 Como verificar o que será enviado

```bash
cd BrewBOSS\github
git status
```

- `A ` (verde) = será adicionado no próximo commit  → confira se é um arquivo da lista ✅
- `M ` (verde) = será modificado  → confira se é um arquivo da lista ✅
- `??` (vermelho) = não será enviado a menos que use `git add`
- Se aparecer `src/` ou `platformio.ini` no status → **NÃO commitar**, adicione ao `.gitignore`

---

## ⚠️ Regra de ouro

**Se tem código-fonte (`.cpp`, `.h`, `.ino`), NÃO vai pro GitHub.**  
O repositório `rampanelli/BrewBOSS` contém **apenas** binários, documentação e assets do GitHub Pages.
