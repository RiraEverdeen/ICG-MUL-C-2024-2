function drawScene() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Color del césped
    const colorGrass = document.getElementById('colorGrass').value;
    ctx.fillStyle = colorGrass;
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

    // Aquí se añadirán las funciones para dibujar la zanahoria y el conejo
}
