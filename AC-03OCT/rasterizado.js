// Función para generar puntos aleatorios
function generarPuntos(numPuntos) {
    const puntos = [];
    for (let i = 0; i < numPuntos; i++) {
        // Se generan puntos con coordenadas aleatorias entre 0 y 500
        puntos.push({ x: Math.random() * 500, y: Math.random() * 500 });
    }
    return puntos;
}

// Calcular el centroide
function calcularCentroide(puntos) {
    // Calcular el promedio de las coordenadas x e y
    const xPromedio = puntos.reduce((sum, p) => sum + p.x, 0) / puntos.length;
    const yPromedio = puntos.reduce((sum, p) => sum + p.y, 0) / puntos.length;
    return { x: xPromedio, y: yPromedio };
}

// Calcular el ángulo respecto al centroide
function angleFromCentroid(punto, centroide) {
    return Math.atan2(punto.y - centroide.y, punto.x - centroide.x);
}

// Ordenar puntos en sentido antihorario
function ordenarPuntos(puntos) {
    const centroide = calcularCentroide(puntos); // Se calcula el centroide
    // Se ordenan los puntos según el ángulo respecto al centroide
    return puntos.sort((a, b) => angleFromCentroid(a, centroide) - angleFromCentroid(b, centroide));
}

// Calcular el producto cruzado
function productoCruzado(o, a, b) {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

// Dibujar figura en el canvas y mostrar puntos
function dibujarFigura(puntos) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
    ctx.beginPath();
    ctx.moveTo(puntos[0].x, puntos[0].y); // Comenzar a dibujar desde el primer punto

    // Dibujar líneas entre los puntos
    puntos.forEach(punto => {
        ctx.lineTo(punto.x, punto.y);
    });

    ctx.closePath();
    ctx.strokeStyle = 'blue'; // Color del borde
    ctx.stroke(); // Dibujar la figura

    // Dibujar cada punto como un círculo
    ctx.fillStyle = 'red'; // Color de los puntos
    puntos.forEach(punto => {
        ctx.beginPath();
        ctx.arc(punto.x, punto.y, 5, 0, 2 * Math.PI); // Dibujar círculo en cada punto
        ctx.fill(); // Rellenar el círculo
    });

    const resultado = determinarConvexidad(puntos); // Determinar convexidad
    ctx.fillStyle = resultado.includes("convexa") ? 'lightgreen' : 'lightcoral'; // Color de la figura
    ctx.fill(); // Rellenar la figura

    // Mostrar resultado en consola
    console.log(determinarConvexidad(puntos));
}

// Determinar si la figura es convexa o cóncava
function determinarConvexidad(puntos) {
    const n = puntos.length;
    let signoProducto = null;

    for (let i = 0; i < n; i++) {
        const o = puntos[i];
        const a = puntos[(i + 1) % n];
        const b = puntos[(i + 2) % n];
        const cp = productoCruzado(o, a, b);

        if (cp !== 0) {
            if (signoProducto === null) {
                signoProducto = cp > 0; // Se establece el signo del primer producto cruzado
            } else if (signoProducto !== (cp > 0)) {
                return "Los puntos no forman una figura convexa."; // Se determina que es cóncava
            }
        }
    }
    return "Los puntos forman una figura convexa."; // Se determina que es convexa
}

// Función principal
function main() {
    const numPuntos = Math.floor(Math.random() * (20 - 3 + 1)) + 3; // Número aleatorio de puntos entre 3 y 20
    const puntos = generarPuntos(numPuntos); // Generar puntos aleatorios
    const puntosOrdenados = ordenarPuntos(puntos); // Ordenar puntos
    dibujarFigura(puntosOrdenados); // Dibujar la figura
}

// Ejecutar la función principal
main();

