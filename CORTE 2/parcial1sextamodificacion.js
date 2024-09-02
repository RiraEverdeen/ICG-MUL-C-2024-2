// Función para mostrar el centro del polígono como un punto en el canvas
function mostrarCentro() {
    const tipoCoordenadas = document.querySelector('input[name="coordenadas"]:checked').value;

    let centroX, centroY;

    // Obtener las coordenadas del centro según el tipo seleccionado
    if (tipoCoordenadas === 'cartesiano') {
        centroX = parseFloat(document.getElementById('centroX').value);
        centroY = parseFloat(document.getElementById('centroY').value);
    } else if (tipoCoordenadas === 'polar') {
        const radio = parseFloat(document.getElementById('radio').value);
        const angulo = parseFloat(document.getElementById('angulo').value);
        const coordenadas = polaresACartesianas(radio, angulo, canvas.width / 2, canvas.height / 2);
        centroX = coordenadas.x;
        centroY = coordenadas.y;
    }

    // Validar las coordenadas del centro
    if (isNaN(centroX) || isNaN(centroY)) {
        alert('Las coordenadas del centro deben ser números válidos.');
        return;
    }

    // Dibujar el centro como un pequeño círculo
    ctx.beginPath();
    ctx.arc(centroX, centroY, 5, 0, 2 * Math.PI); // Dibujar un círculo de radio 5
    ctx.fillStyle = 'red'; // Establecer el color del centro
    ctx.fill(); // Rellenar el círculo
}
