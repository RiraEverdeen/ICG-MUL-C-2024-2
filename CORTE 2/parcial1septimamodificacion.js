// Mejoras en las validaciones
if (isNaN(nLados) || nLados < 3) {
    alert('El número de lados debe ser un número entero mayor o igual a 3.');
    return;
}

if (isNaN(lado) || lado <= 0) {
    alert('La longitud del lado debe ser un número positivo.');
    return;
}

if (isNaN(centroX) || isNaN(centroY)) {
    alert('Las coordenadas del centro deben ser números válidos.');
    return;
}
