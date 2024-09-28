// Clase Linea (en SVG) usa la clase Punto
class Linea {
    constructor(punto) {
        this._punto = punto; // Utilizando un objeto de tipo Punto
    }

    // Método para dibujar la línea en SVG
    dibujar(svg) {
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", this._punto.getX1());
        linea.setAttribute("y1", this._punto.getY1());
        linea.setAttribute("x2", this._punto.getX2());
        linea.setAttribute("y2", this._punto.getY2());
        linea.setAttribute("stroke", "black");
        svg.appendChild(linea);
    }
}

// Clase Circunferencia (en SVG) que usa la clase Punto para el centro
class Circunferencia {
    constructor(centro, radio) {
        this._centro = centro; // Objeto de la clase Punto
        this._r = radio;
    }

    // Método para dibujar la circunferencia en SVG
    dibujar(svg) {
        const circunferencia = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circunferencia.setAttribute("cx", this._centro.getX1());
        circunferencia.setAttribute("cy", this._centro.getY1());
        circunferencia.setAttribute("r", this._r);
        circunferencia.setAttribute("stroke", "black");
        circunferencia.setAttribute("fill", "none");
        svg.appendChild(circunferencia);
    }
}

// Clase Elipse (en SVG) que usa la clase Punto para el centro
class Elipse {
    constructor(centro, radioX, radioY) {
        this._centro = centro; // Objeto de la clase Punto
        this._rx = radioX;
        this._ry = radioY;
    }

    // Método para dibujar la elipse en SVG
    dibujar(svg) {
        const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        elipse.setAttribute("cx", this._centro.getX1());
        elipse.setAttribute("cy", this._centro.getY1());
        elipse.setAttribute("rx", this._rx);
        elipse.setAttribute("ry", this._ry);
        elipse.setAttribute("stroke", "black");
        elipse.setAttribute("fill", "none");
        svg.appendChild(elipse);
    }
}
