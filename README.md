# LuxuryRentals Landing Page

Propuesta comercial para plataforma de alquiler de propiedades de lujo.

## 🚀 Tecnologías

- **Vue 3** - Framework JavaScript progresivo
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript ES6+** - Moderno y limpio

## 📦 Instalación

```bash
# Clonar o copiar el proyecto
cd luxuryrentals-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
luxuryrentals-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── main.css          # Estilos Tailwind
│   ├── components/
│   │   ├── Navbar.vue        # Navegación
│   │   ├── Hero.vue          # Sección principal
│   │   ├── About.vue         # Sobre nosotros
│   │   ├── Features.vue      # Características
│   │   ├── Roles.vue         # Sistema de roles
│   │   ├── Screenshots.vue   # Capturas de pantalla
│   │   ├── TechStack.vue     # Stack tecnológico
│   │   ├── Pricing.vue       # Planes y precios
│   │   ├── CTA.vue           # Call to action
│   │   └── Footer.vue        # Pie de página
│   ├── App.vue               # Componente raíz
│   └── main.js               # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Características

- ✅ Diseño moderno y elegante
- ✅ 100% responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves on-scroll
- ✅ Navegación sticky con efecto blur
- ✅ Secciones bien organizadas
- ✅ Optimizado para SEO
- ✅ Performance excelente
- ✅ Código limpio y mantenible

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores:

```js
colors: {
  primary: { ... },   // Azul oscuro
  accent: { ... },    // Dorado
}
```

### Contenido
Cada componente tiene su contenido hardcodeado para fácil edición:

- **Precios**: `src/components/Pricing.vue`
- **Características**: `src/components/Features.vue`
- **Roles**: `src/components/Roles.vue`
- **Contacto**: `src/components/CTA.vue`

### Imágenes
Las imágenes usan Unsplash por defecto. Reemplaza las URLs por tus propias imágenes.

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para servir desde la carpeta 'dist'
```

## 📝 Licencia

Propietario. Todos los derechos reservados.

---

Desarrollado con ❤️ para LuxuryRentals
