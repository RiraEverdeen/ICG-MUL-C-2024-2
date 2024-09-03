// Función para convertir grados a radianes
function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}

// Función para convertir coordenadas polares a cartesianas
function polaresACartesianas(radio, angulo, centroX, centroY) {
    const anguloRad = gradosARadianes(angulo);
    return {
        x: centroX + radio * Math.cos(anguloRad),
        y: centroY - radio * Math.sin(anguloRad)
    };
}

// Función para trazar un polígono
function trazarPoligono() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const nLados = parseInt(document.getElementById('lados').value);
    const lado = parseFloat(document.getElementById('lado').value);
    let centroX = parseFloat(document.getElementById('centroX').value);
    let centroY = parseFloat(document.getElementById('centroY').value);
    const colorBorde = document.getElementById('colorBorde').value;
    const colorFondo = document.getElementById('colorFondo').value;

    const tipoCoordenadas = document.querySelector('input[name="coordenadas"]:checked').value;

    if (tipoCoordenadas === 'polar') {
        const radio = parseFloat(document.getElementById('radio').value);
        const angulo = parseFloat(document.getElementById('angulo').value);
        const coordenadas = polaresACartesianas(radio, angulo, canvas.width / 2, canvas.height / 2);
        centroX = coordenadas.x;
        centroY = coordenadas.y;
    }

    // Validaciones
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

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    const angle = 2 * Math.PI / nLados; // Ángulo entre cada vértice
    const radioAjustado = lado / (2 * Math.sin(Math.PI / nLados)); // Ajustar el radio según la longitud del lado

    // Dibujar el plano cartesiano
    ctx.strokeStyle = '#CCCCCC'; // Color gris claro para las líneas del plano
    for (let i = 0; i <= canvas.width; i += 50) {
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
    ctx.beginPath();
    ctx.moveTo(
        centroX + radioAjustado * Math.cos(0),
        centroY - radioAjustado * Math.sin(0)
    );

    for (let i = 1; i <= nLados; i++) {
        ctx.lineTo(
            centroX + radioAjustado * Math.cos(i * angle),
            centroY - radioAjustado * Math.sin(i * angle)
        );
    }

    ctx.closePath();
    ctx.fillStyle = colorFondo;
    ctx.fill();
    ctx.strokeStyle = colorBorde;
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Función para mostrar el centro del polígono
function mostrarCentro() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const tipoCoordenadas = document.querySelector('input[name="coordenadas"]:checked').value;

    let centroX, centroY;

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

    if (isNaN(centroX) || isNaN(centroY)) {
        alert('Las coordenadas del centro deben ser números válidos.');
        return;
    }

    ctx.beginPath();
    ctx.arc(centroX, centroY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
}

// Función para actualizar los campos de entrada según el tipo de coordenadas seleccionado
function actualizarCampos() {
    const tipoCoordenadas = document.querySelector('input[name="coordenadas"]:checked').value;
    
    if (tipoCoordenadas === 'cartesiano') {
        document.getElementById('centroX').disabled = false;
        document.getElementById('centroY').disabled = false;
        document.getElementById('radio').disabled = true;
        document.getElementById('angulo').disabled = true;
    } else {
        document.getElementById('centroX').disabled = true;
        document.getElementById('centroY').disabled = true;
        document.getElementById('radio').disabled = false;
        document.getElementById('angulo').disabled = false;
    }
}

// Llamar a actualizarCampos cuando se cambia el tipo de coordenadas
document.querySelectorAll('input[name="coordenadas"]').forEach(input => {
    input.addEventListener('change', actualizarCampos);
});

// Inicializar la interfaz con las coordenadas cartesianas activadas
window.onload = actualizarCampos;
