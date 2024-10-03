// Función para generar puntos aleatorios entre 3 y 20
function generarPuntosAleatorios() {
    const n = Math.floor(Math.random() * 18) + 3;  // Entre 3 y 20 puntos
    const puntos = [];
    for (let i = 0; i < n; i++) {
        puntos.push({
            x: Math.floor(Math.random() * 400) + 50,
            y: Math.floor(Math.random() * 400) + 50
        });
    }
    return puntos;
}

// Función para calcular el producto cruzado
function productoCruzado(p1, p2, p3) {
    return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
}

// Función para determinar si la figura es convexa
function esConvexa(puntos) {
    let signoInicial = null;
    for (let i = 0; i < puntos.length; i++) {
        const p1 = puntos[i];
        const p2 = puntos[(i + 1) % puntos.length];
        const p3 = puntos[(i + 2) % puntos.length];
        const cruzado = productoCruzado(p1, p2, p3);
        const signo = Math.sign(cruzado);
        if (signoInicial === null) {
            signoInicial = signo;
        } else if (signo !== signoInicial && signo !== 0) {
            return false;
        }
    }
    return true;
}

// Función para ordenar los puntos en sentido antihorario
function ordenarPuntos(puntos) {
    const centroide = {
        x: puntos.reduce((sum, p) => sum + p.x, 0) / puntos.length,
        y: puntos.reduce((sum, p) => sum + p.y, 0) / puntos.length
    };
    puntos.sort((a, b) => Math.atan2(a.y - centroide.y, a.x - centroide.x) - Math.atan2(b.y - centroide.y, b.x - centroide.x));
}

// Función para generar la figura y determinar si es convexa o cóncava
function generarFiguraAleatoria() {
    const canvas = document.getElementById('figura');
    const ctx = canvas.getContext('2d');
    const resultado = document.getElementById('resultado');
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el canvas

    const puntos = generarPuntosAleatorios();
    ordenarPuntos(puntos);

    // Dibujar la figura en el canvas
    ctx.beginPath();
    ctx.moveTo(puntos[0].x, puntos[0].y);
    for (let i = 1; i < puntos.length; i++) {
        ctx.lineTo(puntos[i].x, puntos[i].y);
    }
    ctx.closePath();
    ctx.stroke();

    // Verificar si la figura es convexa o cóncava
    if (esConvexa(puntos)) {
        resultado.textContent = 'La figura es convexa.';
    } else {
        resultado.textContent = 'La figura es cóncava.';
    }
}
