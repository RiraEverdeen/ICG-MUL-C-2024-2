function drawShape() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Limpiar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Obtener valores del formulario
    const shape = document.getElementById('shape').value;
    const coordSystem = document.getElementById('coordSystem').value;
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const radius = parseFloat(document.getElementById('radius').value) || 0;
    const width = parseFloat(document.getElementById('width').value) || 0;
    const height = parseFloat(document.getElementById('height').value) || 0;
    const sides = parseInt(document.getElementById('sides').value) || 0;
    const color = document.getElementById('color').value;
    
    // Convertir coordenadas polares a cartesianas si es necesario
    let xPos = x, yPos = y;
    if (coordSystem === 'polar') {
        xPos = x * Math.cos(y);
        yPos = x * Math.sin(y);
    }
    
    // Establecer color de relleno y borde
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    switch (shape) {
        case 'circle':
            if (radius > 0) {
                ctx.beginPath();
                ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
            break;
        case 'rectangle':
            if (width > 0 && height > 0) {
                ctx.fillRect(xPos, yPos, width, height);
                ctx.strokeRect(xPos, yPos, width, height);
            }
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(xPos, yPos);
            ctx.lineTo(xPos + width, yPos);
            ctx.lineTo(xPos + (width / 2), yPos - height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        case 'polygon':
            if (sides > 2) {
                const angle = (2 * Math.PI) / sides;
                ctx.beginPath();
                for (let i = 0; i < sides; i++) {
                    const xPoint = xPos + radius * Math.cos(i * angle);
                    const yPoint = yPos + radius * Math.sin(i * angle);
                    if (i === 0) {
                        ctx.moveTo(xPoint, yPoint);
                    } else {
                        ctx.lineTo(xPoint, yPoint);
                    }
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            break;
        case 'star':
            const spikes = 5;
            const step = Math.PI / spikes;
            const innerRadius = radius / 2;
            ctx.beginPath();
            for (let i = 0; i < 2 * spikes; i++) {
                const r = (i % 2 === 0) ? radius : innerRadius;
                const curX = xPos + r * Math.cos(i * step);
                const curY = yPos - r * Math.sin(i * step);
                if (i === 0) {
                    ctx.moveTo(curX, curY);
                } else {
                    ctx.lineTo(curX, curY);
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        default:
            alert('Figura no soportada');
    }
}
