# Ranking App - Diseño de Figma con Estilos Originales

Esta es una aplicación React.js que replica fielmente el diseño de Figma utilizando los estilos exactos de la librería de diseño. La aplicación muestra un ranking de smartphones con una interfaz móvil moderna y responsiva que sigue el sistema de diseño original.

## ✨ Características

- **🎨 Diseño fiel a Figma**: Utiliza las variables de diseño exactas de la librería
- **🌙 Modo oscuro**: Implementa el tema oscuro del diseño original
- **📱 Diseño móvil primero**: Optimizado para dispositivos móviles (390px de ancho)
- **⚛️ Componentes modulares**: Estructura organizada en componentes reutilizables
- **🎯 Sistema de diseño consistente**: Colores, tipografías y espaciados exactos
- **🔄 Hot reload**: Cambios en tiempo real durante el desarrollo
- **📊 Ranking dinámico**: Datos reales de smartphones con información detallada

## 🎨 Sistema de Diseño

### Colores Principales
- **Fondo principal**: `#000000` (System Background Dark)
- **Texto primario**: `#f5f7fc` (Text Color Primary)
- **Texto secundario**: `#a9bcce` (Text Color Secondary)
- **Color de éxito**: `#00d689` (Success Default)
- **Neutros**: `#1a2935`, `#24394b`, `#142029`, `#101920`

### Tipografía
- **Fuente principal**: Satoshi Variable
- **Tamaños móviles**: 12px, 14px, 16px, 20px, 24px
- **Pesos**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Espaciado
- **Átomos**: 4px, 8px, 16px
- **Moléculas**: 20px, 24px, 32px
- **Iconos**: 12px, 16px, 32px

## 🚀 Instalación y Ejecución

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar la aplicación:**
```bash
npm start
# O usar el script personalizado:
./start.sh
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
src/
├── styles/
│   └── variables.css          # Variables de diseño de Figma
├── components/
│   ├── TopBar.js/.css        # Barra superior con estilos iOS
│   ├── Header.js/.css        # Encabezado con navegación y tags
│   ├── RankingCard.js/.css   # Tarjetas del ranking
│   ├── AdBanner.js/.css      # Banners publicitarios
│   ├── ContentSection.js/.css # Sección de contenido relacionado
│   └── BottomBar.js/.css    # Barra inferior con navegación
├── App.js/.css              # Componente principal
├── index.js/.css            # Punto de entrada
└── README.md               # Documentación
```

## 🎯 Componentes Implementados

### TopBar
- Barra de estado iOS con hora y iconos
- Navegación con botones de retroceso y acciones
- Colores y espaciados exactos del diseño

### Header
- Logo con color de éxito (`#00d689`)
- Badges de categoría con bordes redondeados
- Título principal con tipografía Satoshi Variable
- Descripción con colores secundarios

### RankingCard
- Números de ranking con fondo verde
- Avatares superpuestos para votos
- Carousel de imágenes en miniatura
- Botones con estados hover
- Iconos de ubicación y características

### AdBanner
- Banners con bordes punteados
- Etiqueta "AD" en esquina superior derecha
- Colores neutros del sistema

### ContentSection
- Tarjetas horizontales desplazables
- Tags semitransparentes
- Estadísticas con iconos
- Scroll horizontal oculto

### BottomBar
- Logo centrado con color de marca
- Enlaces organizados en filas
- Navegación inferior con iconos
- Estados hover interactivos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── TopBar.js       # Barra superior
│   ├── Header.js       # Encabezado principal
│   ├── RankingCard.js  # Tarjeta de ranking
│   ├── AdBanner.js     # Banner publicitario
│   ├── ContentSection.js # Sección de contenido
│   └── BottomBar.js    # Barra inferior
├── styles/
│   └── variables.css   # Variables de diseño
├── App.js             # Componente principal
├── App.css            # Estilos principales
├── index.js           # Punto de entrada
└── index.css          # Estilos globales
public/
└── assets/            # Assets de Figma
    ├── *.png          # Imágenes
    └── *.svg          # Iconos vectoriales
```

## 🔧 Tecnologías Utilizadas

- **React 18** - Framework principal
- **CSS3** - Estilos con variables CSS
- **HTML5** - Estructura semántica
- **JavaScript ES6+** - Lógica moderna
- **Node.js** - Entorno de ejecución

## 📱 Diseño Responsivo

- **Móvil**: 390px de ancho (diseño principal)
- **Tablet**: Adaptación automática con bordes redondeados
- **Desktop**: Centrado con sombra y bordes redondeados

## 🎨 Variables de Diseño

Todas las variables están definidas en `src/styles/variables.css` y incluyen:

- Colores del sistema de diseño
- Tipografías móviles
- Espaciados atómicos y moleculares
- Tamaños de iconos
- Alturas de línea
- Bordes redondeados

## 🔗 Diseño Original

Basado en el diseño de Figma: https://www.figma.com/design/15U0jR5MwlhYM2YhV9lvxh/Untitled?node-id=1-8014&t=pbJKRR6gXMw59buv-4

## 📝 Notas de Desarrollo

- La aplicación utiliza hot reload para desarrollo rápido
- Todos los estilos siguen el sistema de diseño de Figma
- Los componentes son completamente modulares y reutilizables
- La tipografía Satoshi Variable se carga automáticamente
- Los colores y espaciados son consistentes en toda la aplicación
