function drawShape() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    // Obtener valores del formulario
    const shape = document.getElementById('shapeSelect').value;
    const coordinateSystem = document.getElementById('coordinateSystem').value;
    const x = parseFloat(document.getElementById('xCoord').value);
    const y = parseFloat(document.getElementById('yCoord').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const sides = parseFloat(document.getElementById('sides').value);
    const fillColor = document.getElementById('color').value;
    const borderColor = document.getElementById('borderColor').value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = fillColor;
    context.strokeStyle = borderColor;
    context.lineWidth = 2;

    // Ajustar coordenadas si se usan coordenadas polares
    let centerX = x;
    let centerY = y;
    if (coordinateSystem === 'polar') {
        centerX = x + radius * Math.cos(0); // Asumir ángulo 0 para simplicidad
        centerY = y + radius * Math.sin(0);
    }

    switch (shape) {
        case 'circle':
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.closePath();
            context.fill();
            context.stroke();
            break;
        case 'rectangle':
            context.beginPath();
            context.rect(centerX, centerY, width, height);
            context.closePath();
            context.fill();
            context.stroke();
            break;
        case 'triangle':
            context.beginPath();
            context.moveTo(centerX, centerY);
            context.lineTo(centerX + 100, centerY);
            context.lineTo(centerX + 50, centerY - 100);
            context.closePath();
            context.fill();
            context.stroke();
            break;
        case 'polygon':
            if (sides < 3) return; // No se puede dibujar un polígono con menos de 3 lados
            const angle = (2 * Math.PI) / sides;
            context.beginPath();
            for (let i = 0; i < sides; i++) {
                context.lineTo(centerX + radius * Math.cos(i * angle), centerY + radius * Math.sin(i * angle));
            }
            context.closePath();
            context.fill();
            context.stroke();
            break;
