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

// Clase Circunferencia (en SVG)
class Circunferencia {
    constructor(cx, cy, r) {
        this._cx = cx;
        this._cy = cy;
        this._r = r;
    }

    // Método para dibujar la circunferencia en SVG
    dibujar(svg) {
        const circunferencia = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circunferencia.setAttribute("cx", this._cx);
        circunferencia.setAttribute("cy", this._cy);
        circunferencia.setAttribute("r", this._r);
        circunferencia.setAttribute("stroke", "black");
        circunferencia.setAttribute("fill", "none");
        svg.appendChild(circunferencia);
    }
}

// Clase Elipse (en SVG)
class Elipse {
    constructor(cx, cy, rx, ry) {
        this._cx = cx;
        this._cy = cy;
        this._rx = rx;
        this._ry = ry;
    }

    // Método para dibujar la elipse en SVG
    dibujar(svg) {
        const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        elipse.setAttribute("cx", this._cx);
        elipse.setAttribute("cy", this._cy);
        elipse.setAttribute("rx", this._rx);
        elipse.setAttribute("ry", this._ry);
        elipse.setAttribute("stroke", "black");
        elipse.setAttribute("fill", "none");
        svg.appendChild(elipse);
    }
}

// Función para dibujar todas las primitivas
function dibujarPrimitivas(svg) {
    const linea = new Linea(50, 50, 200, 200);
    const circunferencia = new Circunferencia(300, 100, 50);
    const elipse = new Elipse(400, 300, 80, 50);

    linea.dibujar(svg);
    circunferencia.dibujar(svg);
    elipse.dibujar(svg);
}

// Obtener el lienzo SVG
const svgCanvas = document.getElementById('svgCanvas');

// Dibujar las primitivas
dibujarPrimitivas(svgCanvas);
