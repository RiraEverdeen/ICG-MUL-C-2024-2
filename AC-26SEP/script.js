// s eesta utilizando el Algoritmo de Bresenham para dibujar la  línea
class Linea {
    constructor(punto) {
        this._punto = punto; // Utilizando un objeto de tipo Punto
    }

    // Algoritmo de Bresenham
    bresenham(x1, y1, x2, y2) {
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let sx = (x1 < x2) ? 1 : -1;
        let sy = (y1 < y2) ? 1 : -1;
        let err = dx - dy;
        
        while (x1 !== x2 || y1 !== y2) {
            // Dibujar un punto (simulación del píxel para SVG)
            const pixel = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            pixel.setAttribute("x", x1);
            pixel.setAttribute("y", y1);
            pixel.setAttribute("width", 1);
            pixel.setAttribute("height", 1);
            pixel.setAttribute("fill", "black");
            svgCanvas.appendChild(pixel);

            const e2 = 2 * err;
            if (e2 > -dy) { err -= dy; x1 += sx; }
            if (e2 < dx) { err += dx; y1 += sy; }
        }
    }

    dibujar(svg) {
        this.bresenham(this._punto.getX1(), this._punto.getY1(), this._punto.getX2(), this._punto.getY2());
    }
}

