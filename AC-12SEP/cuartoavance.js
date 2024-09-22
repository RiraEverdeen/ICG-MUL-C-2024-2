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

// Dibujar una circunferencia
const circunferencia = new Circunferencia(300, 100, 50);
circunferencia.dibujar(svgCanvas);
