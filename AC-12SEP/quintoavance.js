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

// Dibujar una elipse
const elipse = new Elipse(400, 300, 80, 50);
elipse.dibujar(svgCanvas);
