# 🚀 Instrucciones de Publicación en GitHub

## Paso 1: Preparar el Proyecto

### 1.1 Personalizar Variables

**IMPORTANTE:** Antes de publicar, reemplaza estas variables:

```bash
# Reemplazar email de soporte (en todos los archivos HTML)
find . -name "*.html" -type f -exec sed -i '' 's/soporte@tudominio.com/TU_EMAIL@dominio.com/g' {} +

# Reemplazar USUARIO con tu nombre de usuario de GitHub
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's/USUARIO/tu-usuario-github/g' {} +
```

**En Linux (sin las comillas simples después de -i):**
```bash
find . -name "*.html" -type f -exec sed -i 's/soporte@tudominio.com/TU_EMAIL@dominio.com/g' {} +
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i 's/USUARIO/tu-usuario-github/g' {} +
```

### 1.2 Verificar Archivos

Asegúrate de que existan todos estos archivos:

```
✓ index.html
✓ privacy.html
✓ terms.html
✓ 404.html
✓ sitemap.xml
✓ robots.txt
✓ manifest.webmanifest
✓ favicon.svg
✓ apple-touch-icon.png
✓ css/style.css
✓ js/app.js
✓ assets/logo.svg
✓ README.md
✓ CHANGELOG.md
```

---

## Paso 2: Inicializar Git

Ejecuta estos comandos **en orden** desde la carpeta del proyecto:

```bash
# 1. Inicializar repositorio Git
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "Initial commit: Ritmia support landing page

- Add homepage with Hero, FAQ, Contact, and Legal sections
- Add complete Privacy Policy and Terms of Service pages
- Add custom 404 error page
- Implement accessible FAQ accordion with ARIA
- Add dark mode support with CSS variables
- Include SEO optimization (Open Graph, JSON-LD, sitemap)
- Add responsive design (mobile-first)
- Include all assets (favicon, logo, icons)
- Zero dependencies, GitHub Pages ready

🤖 Generated with Claude Code
"

# 4. Renombrar rama a main
git branch -M main
```

---

## Paso 3: Crear Repositorio en GitHub

### Opción A: Vía Web (Recomendado)

1. Ve a [github.com/new](https://github.com/new)
2. Configura:
   - **Repository name:** `ritmia-support` (o el nombre que prefieras)
   - **Description:** "Portal oficial de soporte para Ritmia - App de fitness"
   - **Visibility:** Public ✅
   - **NO inicialices con:** README, .gitignore, o licencia
3. Click **Create repository**

### Opción B: Vía CLI (requiere GitHub CLI)

```bash
# Instalar GitHub CLI si no lo tienes
# macOS: brew install gh
# Windows: winget install GitHub.cli

# Login
gh auth login

# Crear repo
gh repo create ritmia-support --public --source=. --description="Portal oficial de soporte para Ritmia"
```

---

## Paso 4: Conectar y Subir

Después de crear el repo en GitHub, ejecuta:

```bash
# Reemplaza TU_USUARIO con tu nombre de usuario real de GitHub
git remote add origin https://github.com/TU_USUARIO/ritmia-support.git

# Subir el código
git push -u origin main
```

**Ejemplo con usuario "AntonDev":**
```bash
git remote add origin https://github.com/AntonDev/ritmia-support.git
git push -u origin main
```

---

## Paso 5: Activar GitHub Pages

### Vía Web:

1. Ve a tu repositorio en GitHub: `https://github.com/TU_USUARIO/ritmia-support`
2. Click en **Settings** (Configuración) en la parte superior
3. En el menú lateral izquierdo, click en **Pages**
4. En **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**
6. Espera 1-2 minutos

### Vía CLI (GitHub CLI):

```bash
gh repo edit --enable-pages --pages-branch main --pages-path /
```

---

## Paso 6: Verificar Publicación

Después de 1-2 minutos, visita:

```
https://TU_USUARIO.github.io/ritmia-support/
```

### Prueba todas las páginas:

- ✅ Homepage: `https://TU_USUARIO.github.io/ritmia-support/`
- ✅ Privacidad: `https://TU_USUARIO.github.io/ritmia-support/privacy.html`
- ✅ Términos: `https://TU_USUARIO.github.io/ritmia-support/terms.html`
- ✅ 404: `https://TU_USUARIO.github.io/ritmia-support/pagina-inexistente`

---

## Paso 7: Configurar en App Store Connect

1. Inicia sesión en [App Store Connect](https://appstoreconnect.apple.com/)
2. Selecciona tu app **Ritmia**
3. Ve a **App Information** (Información de la app)
4. En **Support URL**, ingresa:
   ```
   https://TU_USUARIO.github.io/ritmia-support/
   ```
5. En **Privacy Policy URL**, ingresa:
   ```
   https://TU_USUARIO.github.io/ritmia-support/privacy.html
   ```
6. Click **Save** (Guardar)

---

## 🔄 Actualizar el Sitio en el Futuro

Cuando necesites hacer cambios:

```bash
# 1. Edita los archivos que necesites

# 2. Ver cambios
git status

# 3. Agregar cambios
git add .

# 4. Crear commit
git commit -m "Update: descripción de tus cambios"

# 5. Subir a GitHub
git push

# 6. Esperar 1-2 minutos para que GitHub Pages actualice
```

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/ritmia-support.git
```

### Error: "failed to push"

```bash
git pull origin main --rebase
git push -u origin main
```

### El sitio no aparece después de 5 minutos

1. Ve a Settings > Pages
2. Verifica que Branch sea `main` y Folder sea `/ (root)`
3. Mira si hay errores en la sección de GitHub Actions (pestaña Actions)
4. Intenta hacer un cambio pequeño y push de nuevo

### Los estilos no se cargan

- Verifica que todos los archivos estén en las rutas correctas
- Limpia caché del navegador (Cmd+Shift+R o Ctrl+Shift+R)
- Inspecciona la consola del navegador (F12) para ver errores

---

## ✅ Checklist Final

Antes de enviar a App Store Review:

- [ ] Email de soporte reemplazado (buscar `soporte@tudominio.com`)
- [ ] URLs actualizadas (buscar `USUARIO`)
- [ ] Versión de la app correcta (badge en index.html)
- [ ] Estado del servicio correcto (badge en index.html)
- [ ] Todas las páginas accesibles (index, privacy, terms, 404)
- [ ] Lighthouse ≥95 en todas las métricas
- [ ] Navegación por teclado funcional
- [ ] Dark mode funciona correctamente
- [ ] Links de Soporte y Privacidad configurados en App Store Connect

---

## 📚 Recursos Adicionales

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [W3C HTML Validator](https://validator.w3.org/)
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)

---

**¡Listo para publicar! 🎉**
