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

    // Aquí se añadirán las funciones para dibujar las figuras
}
