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
    const svg = document.getElementById('figura');
    const resultado = document.getElementById('resultado');
    svg.innerHTML = '';  // Limpiar el SVG

    const puntos = generarPuntosAleatorios();
    ordenarPuntos(puntos);

    // Crear el polígono en SVG
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    const puntosStr = puntos.map(p => `${p.x},${p.y}`).join(' ');
    polygon.setAttribute('points', puntosStr);
    polygon.setAttribute('stroke', 'black');
    polygon.setAttribute('fill', 'transparent');
    svg.appendChild(polygon);

    // Verificar si la figura es convexa o cóncava
    if (esConvexa(puntos)) {
        resultado.textContent = 'La figura es convexa.';
    } else {
        resultado.textContent = 'La figura es cóncava.';
    }
}

