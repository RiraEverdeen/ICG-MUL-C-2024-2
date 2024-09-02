// Comentarios adicionales explicando el propósito de cada bloque de código
// Esta función convierte grados a radianes para cálculos trigonométricos
function gradosARadianes(grados) {
    return grados * Math.PI / 180;
}

// Esta función convierte coordenadas polares a cartesianas usando la fórmula trigonométrica estándar
function polaresACartesianas(radio, angulo, centroX, centroY) {
    const anguloRad = gradosARadianes(angulo);
    return {
        x: centroX + radio * Math.cos(anguloRad),
        y: centroY - radio * Math.sin(anguloRad)
    };
}

// Función que se encarga de dibujar el polígono usando los parámetros proporcionados por el usuario
function trazarPoligono() {
    // Código...
}

// Esta función muestra el centro del polígono en el canvas
function mostrarCentro() {
    // Código...
}

// Función para actualizar los campos de entrada según el tipo de coordenadas seleccionado (cartesianas o polares)
function actualizarCampos() {
    // Código...
}
