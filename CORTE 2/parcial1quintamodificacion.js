// Función para trazar el polígono en el canvas
function trazarPoligono() {
    // Obtener los valores de entrada del usuario
    const nLados = parseInt(document.getElementById('nLados').value); // Número de lados
    const lado = parseFloat(document.getElementById('lado').value); // Longitud del lado
    const colorBorde = document.getElementById('colorBorde').value; // Color del borde
    const colorFondo = document.getElementById('colorFondo').value; // Color de fondo

    // Determinar el tipo de coordenadas
    const tipoCoordenadas = document.querySelector('input[name="coordenadas"]:checked').value;

    let centroX, centroY;

    // Obtener las coordenadas del centro según el tipo seleccionado
    if (tipoCoordenadas === 'cartesiano') {
        centroX = parseFloat(document.getElementById('centroX').value); // Coordenada X
        centroY = parseFloat(document.getElementById('centroY').value); // Coordenada Y
    } else if (tipoCoordenadas === 'polar') {
        const radio = parseFloat(document.getElementById('radio').value); // Radio
        const angulo = parseFloat(document.getElementById('angulo').value); // Ángulo en grados
        const coordenadas = polaresACartesianas(radio, angulo, canvas.width / 2, canvas.height / 2);
        centroX = coordenadas.x;
        centroY = coordenadas.y;
    }

    // Validar los datos de entrada 
    if (isNaN(nLados) || nLados < 3) {
        alert('El número de lados debe ser un número entero mayor o igual a 3.');
        return;
    }

    if (isNaN(lado) || lado <= 0) {
        alert('La longitud del lado debe ser un número positivo.');
        return;
    }

    if (isNaN(centroX) || isNaN(centroY)) {
        alert('Las coordenadas del centro deben ser números válidos.');
        return;
    }

    // Limpiar el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calcular el radio del polígono usando la longitud del lado
    const radio = lado / (2 * Math.sin(Math.PI / nLados)); // Fórmula del radio
    const angle = 2 * Math.PI / nLados; // Ángulo entre vértices

    // Ajustar el tamaño del polígono para que se dibuje bien en el canvas
    const centroCanvasX = canvas.width / 2;
    const centroCanvasY = canvas.height / 2;
    const margen = 20; // Margen para evitar que el polígono toque los bordes del canvas

    // Verificar si el radio es demasiado grande para el canvas
    const maxRadio = Math.min(canvas.width, canvas.height) / 2 - margen;
    const radioAjustado = Math.min(radio, maxRadio);

    // Dibujar el plano cartesiano en el canvas
    ctx.strokeStyle = 'lightgray'; // Color de las líneas del plano cartesiano
    ctx.lineWidth = 0.5; // Grosor de las líneas
    for (let i = 0; i <= canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }

    // Dibujar el polígono en el canvas
    ctx.beginPath(); // Iniciar el dibujo
    ctx.moveTo(
        centroX + radioAjustado * Math.cos(0), // Moverse al primer vértice
        centroY - radioAjustado * Math.sin(0)  // Invertir el eje Y
    );

    // Dibujar los lados del polígono
    for (let i = 1; i <= nLados; i++) {
        ctx.lineTo(
            centroX + radioAjustado * Math.cos(i * angle), // Calcular la coordenada X del vértice
            centroY - radioAjustado * Math.sin(i * angle)  // Calcular la coordenada Y del vértice
        );
    }

    ctx.closePath(); // Cerrar el polígono

    // Rellenar y dibujar el polígono con los colores seleccionados
    ctx.fillStyle = colorFondo; // Establecer el color de relleno
    ctx.fill(); // Rellenar el polígono
    ctx.strokeStyle = colorBorde; // Establecer el color del borde
    ctx.lineWidth = 2; // Grosor del borde
    ctx.stroke(); // Dibujar el borde del polígono
}
