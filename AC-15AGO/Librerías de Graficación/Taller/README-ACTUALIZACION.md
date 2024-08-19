Documentación del Proyecto: Sistemas de Coordenadas y Graficación en Canvas HTML5

Introducción

Este proyecto utiliza el elemento <canvas> de HTML5 para dibujar figuras geométricas en una página web. A través de este proyecto, hemos aprendido sobre los sistemas de coordenadas y cómo se aplican en el contexto del canvas para crear gráficos dinámicos.

Sistemas de Coordenadas

Coordenadas Cartesianas

El sistema de coordenadas cartesianas es el más común y se basa en dos ejes perpendiculares: el eje X (horizontal) y el eje Y (vertical). En el canvas de HTML5:

El eje X aumenta hacia la derecha.

El eje Y aumenta hacia abajo.

El punto (0, 0) está ubicado en la esquina superior izquierda del canvas. A medida que los valores de X y Y aumentan, las figuras se posicionan en el canvas según estos valores.

Coordenadas Polares

El sistema de coordenadas polares utiliza un ángulo y una distancia desde un punto de origen para definir la posición. Aunque no se usa directamente en el canvas, es útil para entender cómo convertir coordenadas polares a cartesianas para dibujar figuras:

Ángulo (θ): La dirección desde el punto de origen.

Radio (r): La distancia desde el origen.

Para convertir coordenadas polares (r, θ) a coordenadas cartesianas (x, y):

𝑥

\=

𝑟

⋅

cos

⁡

(

𝜃

)

x=r⋅cos(θ)

𝑦

\=

𝑟

⋅

sin

⁡

(

𝜃

)

y=r⋅sin(θ)

Graficación en Canvas HTML5

Configuración del Canvas

El elemento <canvas> en HTML5 permite dibujar gráficos mediante JavaScript. Para configurar un canvas:

html

Copiar código

<canvas id="canvas" width="800" height="600"></canvas>

Se especifica el ancho y alto en píxeles.

Dibujo de Figuras Geométricas

Las figuras geométricas se dibujan utilizando el contexto de dibujo 2D del canvas. Las siguientes figuras están implementadas en el proyecto:

Círculo: Se dibuja con la función arc().

Cuadrado: Utiliza la función rect() para definir el tamaño y posición.

Octágono: Se crea mediante una serie de líneas que forman un octágono.

Rectángulo: Similar al cuadrado, pero con diferentes proporciones.

Estrella: Se dibuja utilizando líneas que forman una estrella de cinco puntas.

Personalización de Figuras

Cada figura puede ser personalizada en términos de tamaño, color del borde y color de relleno:

Tamaño: Se especifica como un número que define el tamaño de la figura.

Color del Borde: Se selecciona mediante un selector de color en el formulario.

Color de Relleno: Similar al color del borde, pero para el interior de la figura.

Ejemplo de Código

Aquí tienes un ejemplo básico de cómo se dibuja un círculo en el canvas:

javascript

Copiar código

function drawFigure() {

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const x = parseFloat(document.getElementById('x').value) + canvas.width / 2;

const y = -parseFloat(document.getElementById('y').value) + canvas.height / 2;

const size = parseFloat(document.getElementById('size').value);

const borderColor = document.getElementById('borderColor').value;

const fillColor = document.getElementById('fillColor').value;

ctx.strokeStyle = borderColor;

ctx.fillStyle = fillColor;

ctx.lineWidth = 2;

ctx.beginPath();

ctx.arc(x, y, size, 0, 2 \* Math.PI);

ctx.fill();

ctx.stroke();

}

Propósito del README

Este archivo README proporciona una guía detallada sobre los conceptos y técnicas utilizados en el proyecto de graficación en el canvas de HTML5. Es un recurso educativo para comprender cómo los sistemas de coordenadas se aplican en la creación de gráficos y cómo el código JavaScript interactúa con el canvas para dibujar y personalizar figuras geométricas.

