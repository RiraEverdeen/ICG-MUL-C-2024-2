document.addEventListener('DOMContentLoaded', () => {
    updateCoordinatesInputs();
});

function updateCoordinatesInputs() {
    const coordsType = document.getElementById('coordsType').value;
    const coordsDiv = document.getElementById('coordinates');
    
    coordsDiv.innerHTML = ''; // Limpiar coordenadas anteriores
    
    if (coordsType === 'cartesian') {
        coordsDiv.innerHTML = `
            <label for="xCoord">X:</label>
            <input type="number" id="xCoord" value="300">
            <br><br>
            <label for="yCoord">Y:</label>
            <input type="number" id="yCoord" value="300">
        `;
    } else if (coordsType === 'polar') {
        coordsDiv.innerHTML = `
            <label for="rCoord">Radio:</label>
            <input type="number" id="rCoord" value="100">
            <br><br>
            <label for="thetaCoord">Ángulo (en grados):</label>
            <input type="number" id="thetaCoord" value="45">
        `;
    }
}

function drawScene() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Color del césped
    const colorGrass = document.getElementById('colorGrass').value;
    ctx.fillStyle = colorGrass;
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

    // Color de la zanahoria
    const colorCarrot = document.getElementById('colorCarrot').value;
    drawCarrot(ctx, colorCarrot);

    // Color del conejo
    const colorRabbit = document.getElementById('colorRabbit').value;
    const coords = getCoordinates();
    drawRabbit(ctx, colorRabbit, coords);
}

function getCoordinates() {
    const coordsType = document.getElementById('coordsType').value;
    let coords = {};
    if (coordsType === 'cartesian') {
        coords.x = parseFloat(document.getElementById('xCoord').value) || 0;
        coords.y = parseFloat(document.getElementById('yCoord').value) || 0;
    } else if (coordsType === 'polar') {
        coords.r = parseFloat(document.getElementById('rCoord').value) || 0;
        coords.theta = parseFloat(document.getElementById('thetaCoord').value) || 0;
    }
    coords.coordsType = coordsType; // Añadido para la función drawRabbit
    return coords;
}

function polarToCartesian(r, theta) {
    const rad = theta * (Math.PI / 180);
    return {
        x: r * Math.cos(rad) + 300,
        y: r * Math.sin(rad) + 200
    };
}

function drawCarrot(ctx, color) {
    // Ejemplo simple de dibujo de una zanahoria
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(400, 300);
    ctx.lineTo(420, 250);
    ctx.lineTo(440, 300);
    ctx.closePath();
    ctx.fill();
}

function drawRabbit(ctx, color, coords) {
    const position = coords.coordsType === 'polar' 
        ? polarToCartesian(coords.r, coords.theta) 
        : { x: coords.x, y: coords.y };

    // Dibujar cuerpo del conejo
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(position.x, position.y, 30, 0, 2 * Math.PI);
    ctx.fill();

    // Dibujar cabeza
    ctx.beginPath();
    ctx.arc(position.x, position.y - 40, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Dibujar orejas
    ctx.beginPath();
    ctx.arc(position.x - 10, position.y - 60, 10, 0, Math.PI);
    ctx.arc(position.x + 10, position.y - 60, 10, 0, Math.PI);
    ctx.fill();
}
