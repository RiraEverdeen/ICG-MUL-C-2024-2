// Función para generar puntos aleatorios
function generarPuntos() {
    // Generar un número aleatorio de puntos entre 3 y 20
    const numPuntos = Math.floor(Math.random() * (20 - 3 + 1)) + 3;
    const puntos = [];
    
    // Generar coordenadas aleatorias para los puntos
    for (let i = 0; i < numPuntos; i++) {
        const x = Math.floor(Math.random() * 800); // Ancho del canvas
        const y = Math.floor(Math.random() * 600); // Alto del canvas
        puntos.push({ x, y });
    }
    
    // Dibujar la figura en el canvas
    dibujarFigura(puntos);
}

// Función para dibujar la figura en el canvas
function dibujarFigura(puntos) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Limpiar el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Ordenar puntos por ángulo respecto al centroide
    const centroide = calcularCentroide(puntos);
    puntos.sort((a, b) => {
        const angleA = Math.atan2(a.y - centroide.y, a.x - centroide.x);
        const angleB = Math.atan2(b.y - centroide.y, b.x - centroide.x);
        return angleA - angleB;
    });

    // Dibujar la figura
    ctx.beginPath();
    ctx.moveTo(puntos[0].x, puntos[0].y);
    for (const punto of puntos) {
        ctx.lineTo(punto.x, punto.y);
    }
    ctx.closePath();
    
    // Establecer el color y rellenar
    ctx.fillStyle = "rgba(100, 150, 200, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Determinar si es cóncava o convexa
    const resultado = esConvexa(puntos) ? "Convexa" : "Cóncava";
    document.getElementById("resultado").innerText = `La figura es: ${resultado}`;
}

// Función para calcular el centroide
function calcularCentroide(puntos) {
    const suma = puntos.reduce((acc, punto) => {
        acc.x += punto.x;
        acc.y += punto.y;
        return acc;
    }, { x: 0, y: 0 });

    return { x: suma.x / puntos.length, y: suma.y / puntos.length };
}

// Función para determinar si la figura es convexa
function esConvexa(puntos) {
    let signo = 0; // Almacenará el signo del producto cruzado
    const n = puntos.length;

    for (let i = 0; i < n; i++) {
        const p1 = puntos[i];
        const p2 = puntos[(i + 1) % n]; // Siguiente punto
        const p3 = puntos[(i + 2) % n]; // Siguiente al siguiente

        // Calcular el producto cruzado
        const cruzado = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);

        // Determinar el signo del producto cruzado
        if (cruzado !== 0) {
            if (signo === 0) {
                signo = cruzado > 0 ? 1 : -1; // Guardar el signo del primer producto no cero
            } else if ((cruzado > 0 && signo < 0) || (cruzado < 0 && signo > 0)) {
                return false; // Si hay cambio de signo, no es convexa
            }
        }
    }
    return true; // Todos los productos cruzados tienen el mismo signo
}



