# portfolio-sara

# ESQUEMÁTICO

# Enfoque general del proyecto

Mi portfolio es una web editorial y personal, construida con HTML, CSS y JavaScript vanilla, donde priorizo la jerarquía visual, la accesibilidad y un diseño responsive mobile-first.
Cada decisión de diseño y código está pensada para ser funcional, mantenible y justificada.

# Responsive Design / Mobile-first

El layout está planteado mobile-first: primero móvil, luego tablet y desktop.

Los estilos base están pensados para pantallas pequeñas.

Uso media queries para enriquecer el diseño en tamaños mayores sin romper el layout.

Trabajo con CSS Grid y Flexbox para reorganizar el contenido.

Tipografía y espaciados fluidos con clamp() y variables CSS.

El hero se adapta: en móvil es más compacto y legible, en desktop es más editorial.

Error aprendido: no aplicar estilos mobile directamente sobre clases base sin media queries, porque rompe desktop.

# Navegación

Navegación fija en desktop.

En móvil, menú de hamburguesa desplegable.

El comportamiento responsive del menú está aislado en media queries, manteniendo desktop como estado por defecto.

Incluye focus visible y navegación por teclado.

# Diseño visual

Estilo editorial, limpio y visual.

Uso de gradientes sutiles para el hero.

Espacios en blanco controlados con sistema de variables.

Jerarquía clara entre títulos (serif display) y texto largo (sans).

# Tipografía

Serif display para hero y títulos de sección.

Sans-serif para texto largo por legibilidad.

Tamaños fluidos con clamp().

Jerarquía de headings correcta:

Un solo h1

h2 para secciones

h3 para elementos internos

# Modo oscuro

Implementado con un botón toggle.

Funciona añadiendo/eliminando una clase en el documento.

Los colores cambian mediante variables CSS.

Transición suave entre modo claro y oscuro.

Compatible con accesibilidad.

# Animaciones

Animaciones suaves en CSS (hero, hover, scroll).

Uso de scroll-driven animations cuando el navegador lo soporta.

Fallbacks para navegadores antiguos.

prefers-reduced-motion desactiva animaciones cuando el usuario lo solicita.

# Accesibilidad

HTML semántico (nav, main, section, footer)

Jerarquía correcta de headings

Imágenes con alt

Focus visible en enlaces y botones

Contraste de color WCAG AA

Navegación por teclado

No hay información que dependa solo del color

# SEO

<title> descriptivo (Portfolio)

Meta description

Open Graph

Estructura clara y semántica

Buen uso de encabezados

Imágenes optimizadas y lazy loading

# Deploy

Proyecto desplegado en GitHub Pages

Dominio tipo:
https://sarafisac.github.io/portfolio-template-creative-designers/

Repositorio versionado y accesible

# Calidad de código

CSS organizado por:

base

layout

componentes

Variables CSS para colores y espaciado

Comentarios explican el por qué

Sin código comentado innecesario

JS sin errores de consola

# Reflexión (por si te preguntan)

El mayor reto fue adaptar un diseño editorial a mobile-first sin romper el layout de escritorio. Aprendí la importancia de aislar correctamente los estilos responsive y de pensar primero en la estructura antes que en lo visual. El proyecto refleja no solo el resultado final, sino el proceso de aprendizaje.
