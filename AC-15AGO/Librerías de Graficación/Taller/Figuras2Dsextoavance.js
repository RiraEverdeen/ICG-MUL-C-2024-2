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

    // Aquí se añadirá la función para dibujar el conejo
}

function drawCarrot(ctx, color) {
    const carrotBaseX = 350;
    const carrotBaseY = canvas.height - 120;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(carrotBaseX, carrotBaseY);
    ctx.lineTo(carrotBaseX + 20, carrotBaseY - 60);
    ctx.lineTo(carrotBaseX - 20, carrotBaseY - 60);
    ctx.closePath();
    ctx.fill();

    // Hacer el tallo
    ctx.beginPath();
    ctx.moveTo(carrotBaseX, carrotBaseY - 60);
    ctx.lineTo(carrotBaseX + 10, carrotBaseY - 100);
    ctx.lineTo(carrotBaseX - 10, carrotBaseY - 100);
    ctx.closePath();
    ctx.fill();
}
