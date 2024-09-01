// Obtener el elemento canvas y su contexto para dibujar
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Función para convertir grados a radianes
function gradosARadianes(grados) {
    return grados * Math.PI / 180; // Fórmula para convertir grados a radianes
}

// Función para convertir coordenadas polares a cartesianas
function polaresACartesianas(radio, angulo, centroX, centroY) {
    const anguloRad = gradosARadianes(angulo); // Convertir ángulo a radianes
    return {
        x: centroX + radio * Math.cos(anguloRad), // Calcular coordenada X
        y: centroY - radio * Math.sin(anguloRad)  // Calcular coordenada Y (invertido para el eje Y)
    };
}

// Función para actualizar la visualización de los campos de entrada según el tipo de coordenadas seleccionado
function actualizarCampos() {
    const tipoCoordenadas = document.querySelector('input[name="coordenadas"]:checked').value;
    if (tipoCoordenadas === 'cartesiano') {
        document.getElementById('coordenadasCartesianas').classList.remove('hidden');
        document.getElementById('coordenadasPolares').classList.add('hidden');
    } else {
        document.getElementById('coordenadasCartesianas').classList.add('hidden');
        document.getElementById('coordenadasPolares').classList.remove('hidden');
    }
}

// Inicializar la visualización correcta al cargar la página
actualizarCampos();

// Escuchar cambios en el tipo de coordenadas para actualizar los campos de entrada
document.querySelectorAll('input[name="coordenadas"]').forEach(radio => {
    radio.addEventListener('change', actualizarCampos);
});
