// Clase Linea (en SVG)
class Linea {
    constructor(x1, y1, x2, y2) {
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    }

    // Método para dibujar la línea en SVG
    dibujar(svg) {
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", this._x1);
        linea.setAttribute("y1", this._y1);
        linea.setAttribute("x2", this._x2);
        linea.setAttribute("y2", this._y2);
        linea.setAttribute("stroke", "black");
        svg.appendChild(linea);
    }
}

// Configuración del lienzo SVG
const svgCanvas = document.getElementById('svgCanvas');

// Dibujar una línea
const linea = new Linea(50, 50, 200, 200);
linea.dibujar(svgCanvas);
