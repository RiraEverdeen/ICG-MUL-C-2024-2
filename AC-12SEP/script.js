const svgCanvas = document.getElementById('svgCanvas');

// Función para dibujar una línea usando SVG
function dibujarLinea(x1, y1, x2, y2) {
    const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
    linea.setAttribute("x1", x1);
    linea.setAttribute("y1", y1);
    linea.setAttribute("x2", x2);
    linea.setAttribute("y2", y2);
    linea.setAttribute("stroke", "black");
    svgCanvas.appendChild(linea);
}

// Función para dibujar un círculo usando SVG
function dibujarCircunferencia(cx, cy, r) {
    const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circulo.setAttribute("cx", cx);
    circulo.setAttribute("cy", cy);
    circulo.setAttribute("r", r);
    circulo.setAttribute("stroke", "black");
    circulo.setAttribute("fill", "none");
    svgCanvas.appendChild(circulo);
}

// Función para dibujar una elipse usando SVG
function dibujarElipse(cx, cy, a, b) {
    const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    elipse.setAttribute("cx", cx);
    elipse.setAttribute("cy", cy);
    elipse.setAttribute("rx", a);
    elipse.setAttribute("ry", b);
    elipse.setAttribute("stroke", "black");
    elipse.setAttribute("fill", "none");
    svgCanvas.appendChild(elipse);
}

// Dibujar las primitivas
dibujarLinea(50, 50, 200, 200);
dibujarCircunferencia(300, 100, 50);
dibujarElipse(400, 300, 80, 50);
