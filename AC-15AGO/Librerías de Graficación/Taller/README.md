README.md

Conceptos Fundamentales sobre Sistemas de Coordenadas y Graficación en el Canvas de HTML

1. Introducción al Canvas de HTML

El elemento <canvas> de HTML es una herramienta poderosa utilizada para dibujar gráficos, crear animaciones, y representar visualizaciones dinámicas directamente en una página web. Con la ayuda de JavaScript, se pueden dibujar formas, imágenes, y textos en un área delimitada por el <canvas>. Este elemento es extremadamente útil en aplicaciones interactivas como juegos, simulaciones, y editores gráficos en línea.

1. Sistemas de Coordenadas en el Canvas

El sistema de coordenadas del canvas se basa en un plano cartesiano 2D. A continuación se explican los aspectos clave de este sistema:

Origen del Sistema de Coordenadas:

El origen (0, 0) se encuentra en la esquina superior izquierda del canvas.

El eje X incrementa de izquierda a derecha.

El eje Y incrementa de arriba hacia abajo.

Transformaciones del Sistema de Coordenadas:

Traslación: Se puede mover el origen (0, 0) a otro punto usando ctx.translate(x, y).

Rotación: Es posible rotar todo el sistema de coordenadas alrededor de un punto usando ctx.rotate(angle).

Escalado: Permite aumentar o disminuir el tamaño de las figuras mediante ctx.scale(scalex, scaley).

1. Graficación de Figuras en el Canvas

El canvas permite dibujar una variedad de figuras básicas como círculos, rectángulos, líneas, y polígonos. A través de JavaScript, se define la posición, tamaño, color, y otros atributos de estas figuras.

Ejemplos de Figuras:

Círculos:

Se dibujan usando ctx.arc(x, y, radius, startAngle, endAngle).

El círculo es definido por su centro (x, y) y su radio.

Rectángulos:

Se utilizan ctx.rect(x, y, width, height) para dibujar un rectángulo.

El rectángulo es definido por su esquina superior izquierda (x, y) y sus dimensiones width (ancho) y height (alto).

Polígonos:

Para polígonos como octágonos o estrellas, se pueden utilizar ciclos (for) que conectan múltiples puntos calculados con funciones trigonométricas.

1. Colores y Estilos

El canvas permite personalizar los colores y estilos de las figuras a través de las siguientes propiedades:

Color del Borde (strokeStyle):

Define el color de la línea que rodea la figura.

Ejemplo: ctx.strokeStyle = '#FF0000'; para un borde rojo.

Color de Relleno (fillStyle):

Define el color del interior de la figura.

Ejemplo: ctx.fillStyle = '#00FF00'; para un relleno verde.

Anchura de la Línea (lineWidth):

Controla el grosor de la línea de borde.

Ejemplo: ctx.lineWidth = 5; para una línea gruesa de 5 píxeles.

1. Dibujar un Plano Cartesiano en el Canvas

El proyecto incluye la funcionalidad de dibujar un plano cartesiano dentro del canvas. Esto es útil para la visualización de figuras geométricas en relación con un sistema de coordenadas:

Líneas de la Cuadrícula:

Líneas horizontales y verticales se dibujan cada 20 píxeles para formar una cuadrícula.

Ayuda a visualizar la posición de las figuras en el canvas.

Ejes X y Y:

Los ejes se dibujan en el centro del canvas, dividiéndolo en cuatro cuadrantes.

Esto facilita la ubicación de figuras en coordenadas tanto positivas como negativas.

1. Aplicaciones y Uso Práctico

El conocimiento sobre sistemas de coordenadas y la graficación en canvas es aplicable en diversas áreas como:

Desarrollo de Juegos: Utilizar el canvas para gráficos 2D en videojuegos.

Visualización de Datos: Crear gráficos y diagramas interactivos.

Simulaciones: Modelar fenómenos físicos o matemáticos con visualizaciones en tiempo real.

1. Conclusión

Trabajar con el canvas de HTML y entender el sistema de coordenadas es esencial para el desarrollo de aplicaciones web interactivas. Este proyecto ha permitido explorar cómo transformar y manipular gráficos de manera eficiente utilizando JavaScript y el canvas.
