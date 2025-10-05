# Ritmia - Portal de Soporte

Portal oficial de soporte para la aplicación Ritmia, diseñado para cumplir con los requisitos de App Store Connect y proporcionar una experiencia accesible, rápida y profesional.

## 📋 Características

- ✅ **100% estático** - Sin dependencias de backend, listo para GitHub Pages
- ✅ **Accesible (A11y)** - WCAG 2.1 AA compliance, semántica correcta, navegación por teclado
- ✅ **SEO optimizado** - Meta tags, Open Graph, JSON-LD, sitemap.xml
- ✅ **Dark mode** - Soporte automático con `prefers-color-scheme`
- ✅ **Performance** - Diseñado para Lighthouse ≥95 en todas las métricas
- ✅ **Responsive** - Mobile-first, optimizado para todos los dispositivos
- ✅ **App Store Ready** - URL de soporte con contacto, FAQ y enlaces legales

## 🗂️ Estructura del Proyecto

```
ritmia-support/
├─ index.html              # Página principal de soporte
├─ privacy.html            # Política de Privacidad
├─ terms.html              # Términos de Servicio
├─ 404.html                # Página de error personalizada
├─ sitemap.xml             # Mapa del sitio
├─ robots.txt              # Instrucciones para crawlers
├─ favicon.svg             # Favicon (SVG)
├─ apple-touch-icon.png    # Ícono Apple (180x180)
├─ manifest.webmanifest    # Web App Manifest (PWA)
├─ assets/
│  ├─ logo.svg             # Logo de Ritmia
│  └─ ui/                  # Ilustraciones adicionales (si se agregan)
├─ css/
│  └─ style.css            # Estilos globales con CSS variables
└─ js/
   └─ app.js               # JavaScript accesible (FAQ, smooth scroll)
```

## 🎨 Personalización

### 1. Editar Email de Soporte

El email de contacto aparece en múltiples lugares. Busca `soporte@tudominio.com` y reemplázalo con tu email real:

**Archivos a editar:**
- `index.html` (líneas ~50, ~159, ~189, ~233)
- `privacy.html` (línea ~196)
- `terms.html` (línea ~154)
- `404.html` (línea ~52)

**Método rápido con búsqueda/reemplazo:**
```bash
# macOS/Linux
find . -name "*.html" -type f -exec sed -i '' 's/soporte@tudominio.com/TU_EMAIL_REAL@dominio.com/g' {} +

# Linux (sin '')
find . -name "*.html" -type f -exec sed -i 's/soporte@tudominio.com/TU_EMAIL_REAL@dominio.com/g' {} +
```

### 2. Actualizar Versión de la App

Edita el badge de versión en `index.html`:

```html
<!-- Busca esta línea (aprox. línea 139) -->
<span class="badge badge-version">Versión 1.0</span>

<!-- Cambia "1.0" por tu versión actual -->
<span class="badge badge-version">Versión 2.1</span>
```

### 3. Cambiar Estado del Servicio

Edita el badge de estado en `index.html`:

```html
<!-- Busca esta línea (aprox. línea 140) -->
<span class="badge badge-status" data-status="operando">Estado: Operando</span>

<!-- Opciones disponibles: -->
<!-- Operando (verde) -->
<span class="badge badge-status" data-status="operando">Estado: Operando</span>

<!-- Degradado (amarillo) -->
<span class="badge badge-status" data-status="degradado">Estado: Degradado</span>

<!-- Mantenimiento (rojo) -->
<span class="badge badge-status" data-status="mantenimiento">Estado: Mantenimiento</span>
```

Los colores se aplicarán automáticamente vía CSS según el atributo `data-status`.

### 4. Actualizar URLs del Sitio

Antes de publicar, reemplaza `USUARIO` con tu nombre de usuario de GitHub en:

**Archivos a editar:**
- `index.html` (meta tags, JSON-LD)
- `privacy.html` (meta tags)
- `terms.html` (meta tags)
- `sitemap.xml` (todas las URLs)
- `robots.txt` (URL del sitemap)

**Ejemplo de búsqueda/reemplazo:**
```bash
# Reemplazar USUARIO con tu usuario real
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's/USUARIO/tu-usuario-github/g' {} +
```

O edita manualmente:
- Busca `https://USUARIO.github.io/ritmia-support/`
- Reemplaza con `https://TU_USUARIO.github.io/ritmia-support/`

### 5. Actualizar Políticas Legales

**Política de Privacidad (`privacy.html`):**
- Revisa las secciones y ajusta según tus prácticas reales de datos
- Actualiza la fecha de "Última actualización"
- Ajusta la jurisdicción si no aplica México

**Términos de Servicio (`terms.html`):**
- Revisa las limitaciones de responsabilidad
- Actualiza la fecha de "Última actualización"
- Ajusta la ley aplicable y jurisdicción

## 🚀 Publicación en GitHub Pages

### Paso 1: Crear el Repositorio

```bash
# Desde la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: Ritmia support landing"
git branch -M main
```

### Paso 2: Subir a GitHub

```bash
# Crea un nuevo repo en GitHub.com llamado "ritmia-support" (o el nombre que prefieras)
# Luego ejecuta:

git remote add origin https://github.com/TU_USUARIO/ritmia-support.git
git push -u origin main
```

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click en **Save**
6. Espera 1-2 minutos y visita: `https://TU_USUARIO.github.io/ritmia-support/`

### Paso 4: Verificar la Publicación

Prueba estas URLs:
- `https://TU_USUARIO.github.io/ritmia-support/` (Home)
- `https://TU_USUARIO.github.io/ritmia-support/privacy.html` (Privacidad)
- `https://TU_USUARIO.github.io/ritmia-support/terms.html` (Términos)
- `https://TU_USUARIO.github.io/ritmia-support/pagina-inexistente` (404)

## 📱 Uso en App Store Connect

1. Inicia sesión en [App Store Connect](https://appstoreconnect.apple.com/)
2. Ve a tu app Ritmia
3. En **App Information** > **Support URL**, ingresa:
   ```
   https://TU_USUARIO.github.io/ritmia-support/
   ```
4. En **Privacy Policy URL**, ingresa:
   ```
   https://TU_USUARIO.github.io/ritmia-support/privacy.html
   ```
5. Guarda los cambios

**✅ Requisitos cumplidos:**
- ✓ URL pública accesible
- ✓ Información de contacto visible (email)
- ✓ Preguntas frecuentes (FAQ)
- ✓ Enlaces a Privacidad y Términos
- ✓ Información sobre la app (versión, estado)

## 🔧 Mantenimiento

### Actualizar FAQs

Edita `index.html`, busca la sección `<!-- FAQ -->` (aprox. línea 173) y agrega/modifica items:

```html
<div class="faq-item">
  <h3 class="faq-question">
    <button
      type="button"
      aria-expanded="false"
      class="faq-toggle"
      id="faq-toggle-7"
      aria-controls="faq-answer-7">
      <span>Tu nueva pregunta aquí</span>
      <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </h3>
  <div
    id="faq-answer-7"
    role="region"
    aria-labelledby="faq-toggle-7"
    class="faq-answer"
    hidden>
    <p>Tu respuesta aquí.</p>
  </div>
</div>
```

**IMPORTANTE:** También actualiza el JSON-LD en el `<head>` de `index.html` para mantener SEO:

```json
{
  "@type": "Question",
  "name": "Tu nueva pregunta",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Tu respuesta aquí."
  }
}
```

### Habilitar Formulario de Contacto (Opcional)

Si deseas usar [Formspree](https://formspree.io/) para recibir mensajes:

1. Crea una cuenta gratuita en Formspree
2. Crea un nuevo formulario y obtén tu endpoint (ej. `https://formspree.io/f/ABC123`)
3. En `index.html`, descomenta el bloque del formulario (aprox. línea 353)
4. Reemplaza `action=""` con `action="https://formspree.io/f/TU_ID"`
5. En `js/app.js`, descomenta la función `initContactForm()` (línea 101 y 107)

## ⚡ Performance y Verificación

### Lighthouse Audit

```bash
# Opción 1: Chrome DevTools
# 1. Abre Chrome y ve a tu sitio publicado
# 2. Abre DevTools (F12)
# 3. Ve a la pestaña "Lighthouse"
# 4. Selecciona todas las categorías
# 5. Click en "Analyze page load"

# Opción 2: CLI (requiere Node.js)
npm install -g lighthouse
lighthouse https://TU_USUARIO.github.io/ritmia-support/ --view
```

**Métricas objetivo:**
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### Validación HTML

Valida el código HTML en [W3C Validator](https://validator.w3.org/):
- Ingresa la URL de tu sitio
- Verifica que no haya errores graves

### Contraste de Colores

Verifica contraste AA (≥4.5:1) en [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/):
- **Texto principal:** `#111827` sobre `#ffffff` ✅
- **Texto secundario:** `#4b5563` sobre `#ffffff` ✅
- **Accent:** `#7c3aed` sobre `#ffffff` ✅

### Test de Accesibilidad

Prueba navegación por teclado:
- `Tab` / `Shift+Tab` - Navegar entre elementos
- `Enter` / `Espacio` - Activar botones y acordeón
- `Home` / `End` - Navegar entre preguntas FAQ
- Todos los elementos interactivos deben tener foco visible

## 🛠️ Tecnologías

- **HTML5** - Semántica accesible
- **CSS3** - Variables, Grid, Flexbox, media queries
- **JavaScript Vanilla** - Sin frameworks, zero dependencias
- **SVG** - Gráficos vectoriales optimizados
- **JSON-LD** - Structured data para SEO

## 📊 Matriz de Cumplimiento App Store

| Requisito                        | Estado | Ubicación                  |
|----------------------------------|--------|----------------------------|
| URL de soporte pública           | ✅     | index.html                 |
| Información de contacto visible  | ✅     | Email en hero y footer     |
| Política de Privacidad           | ✅     | privacy.html               |
| Términos de Servicio             | ✅     | terms.html                 |
| Preguntas frecuentes (FAQ)       | ✅     | index.html #faq            |
| Información sobre la app         | ✅     | Versión y estado (badges)  |
| Accesibilidad                    | ✅     | WCAG 2.1 AA                |
| Responsive design                | ✅     | Mobile-first CSS           |
| Tiempo de carga < 3s             | ✅     | Lighthouse Performance ≥95 |

## 🔒 Seguridad y Privacidad

- ✅ **Sin cookies ni tracking** - No usa Google Analytics, Facebook Pixel, etc.
- ✅ **Sin scripts de terceros** - Todo el código está en el repo
- ✅ **HTTPS por defecto** - GitHub Pages sirve siempre con TLS
- ✅ **Sin recopilación de datos** - Sitio estático, sin backend
- ✅ **Formulario opcional** - Formspree solo si lo habilitas

## 🐛 Solución de Problemas

### El sitio no se ve en GitHub Pages

1. Verifica que el repo sea público (o tengas GitHub Pro para repos privados)
2. Revisa Settings > Pages y confirma que la fuente sea `main` / `/ (root)`
3. Espera 2-3 minutos y limpia caché del navegador
4. Verifica que el archivo se llame exactamente `index.html` (minúsculas)

### Los estilos no se cargan

1. Verifica que todos los enlaces usen rutas absolutas (`/css/style.css` en lugar de `css/style.css`)
2. En navegadores locales (file://), usa rutas relativas temporalmente
3. Para GitHub Pages, las rutas absolutas funcionan correctamente

### El dark mode no funciona

1. Verifica que tu sistema operativo esté en modo oscuro
2. Prueba en diferentes navegadores (Safari, Chrome, Firefox)
3. Inspecciona con DevTools que las CSS variables cambien

### Los iconos no se ven

1. Verifica que `favicon.svg`, `logo.svg` y `apple-touch-icon.png` estén en las rutas correctas
2. Limpia caché del navegador (Cmd+Shift+R en Mac, Ctrl+Shift+R en Windows)
3. Los SVG usan gradientes que se renderizan en navegadores modernos

## 📝 Licencia y Créditos

Este proyecto es de código abierto y libre para uso personal o comercial.

**Desarrollado para:** Ritmia - App de seguimiento de entrenamientos
**Tecnología:** HTML5 + CSS3 + JavaScript Vanilla
**Hosting:** GitHub Pages
**Última actualización:** 5 de octubre de 2025

---

## 🆘 Soporte

¿Necesitas ayuda con este sitio?

- **Email:** soporte@tudominio.com
- **Documentación GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)
- **Lighthouse Docs:** [web.dev/lighthouse](https://web.dev/lighthouse/)
- **WCAG Guidelines:** [w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)

---

**¡Listo para publicar! 🚀**
# Landingpage-Ritmia
