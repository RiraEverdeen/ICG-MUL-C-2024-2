// Función para dibujar el plano cartesiano con coordenadas
function drawGrid() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Establecer el estilo del plano cartesiano
    ctx.strokeStyle = '#e0e0e0'; // Color de las líneas de la cuadrícula
    ctx.lineWidth = 0.5;
    
    // Dibujar líneas horizontales
    for (let i = 0; i <= canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    
    // Dibujar líneas verticales
    for (let i = 0; i <= canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }

    // Dibujar ejes
    ctx.strokeStyle = '#000000'; // Color de los ejes
    ctx.lineWidth = 1;

    // Eje X
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Eje Y
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // Dibujar coordenadas numéricas en los ejes
    ctx.font = '10px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';

    // Coordenadas en el eje X
    for (let i = canvas.width / 2; i <= canvas.width; i += 20) {
        ctx.fillText((i - canvas.width / 2) / 20, i, canvas.height / 2 + 15);
    }
    for (let i = canvas.width / 2; i >= 0; i -= 20) {
        ctx.fillText((i - canvas.width / 2) / 20, i, canvas.height / 2 + 15);
    }

    // Coordenadas en el eje Y
    for (let i = canvas.height / 2; i <= canvas.height; i += 20) {
        ctx.fillText((canvas.height / 2 - i) / 20, canvas.width / 2 - 15, i + 5);
    }
    for (let i = canvas.height / 2; i >= 0; i -= 20) {
        ctx.fillText((canvas.height / 2 - i) / 20, canvas.width / 2 - 15, i + 5);
    }
}

// Función para dibujar la figura seleccionada
function drawFigure() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const x = parseFloat(document.getElementById('x').value) + canvas.width / 2;
    const y = -parseFloat(document.getElementById('y').value) + canvas.height / 2;
    const figure = document.getElementById('figure').value;
    const size = parseFloat(document.getElementById('size').value);
    const borderColor = document.getElementById('borderColor').value;
    const fillColor = document.getElementById('fillColor').value;

    // Limpiar el canvas y dibujar la cuadrícula
    drawGrid();

    ctx.strokeStyle = borderColor;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 2;

    ctx.beginPath(); // Comenzar una nueva figura

    switch (figure) {
        case 'circle':
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            break;
        case 'square':
            ctx.rect(x - size / 2, y - size / 2, size, size);
            break;
        case 'octagon':
            ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
            for (let i = 1; i < 8; i++) {
                ctx.lineTo(x + size * Math.cos(i * Math.PI / 4), y + size * Math.sin(i * Math.PI / 4));
            }
            break;
        case 'house':
            // Dibujar una casa simplificada
            // Techo
            ctx.moveTo(x, y - size);
            ctx.lineTo(x - size, y);
            ctx.lineTo(x + size, y);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            // Cuerpo
            ctx.beginPath();
            ctx.rect(x - size / 2, y, size, size);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            break;
        case 'rectangle':
            ctx.rect(x - size / 2, y - size / 2, size, size * 2);
            break;
        case 'star':
            const spikes = 5;
            const step = Math.PI / spikes;
            const halfStep = step / 2;
            ctx.moveTo(x, y - size);
            for (let i = 0; i < spikes * 2; i++) {
                const radius = i % 2 === 0 ? size : size / 2;
                ctx.lineTo(
                    x + radius * Math.sin(i * step),
                    y - radius * Math.cos(i * step)
                );
            }
            ctx.closePath();
            break;
    }

    ctx.fill();
    ctx.stroke();
}


