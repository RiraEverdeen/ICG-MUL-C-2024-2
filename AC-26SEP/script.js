// Clase Punto (para manejar las coordenadas)
class Punto {
    constructor(x1, y1, x2 = null, y2 = null) {
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    }

    // Métodos para obtener los valores de las coordenadas
    getX1() {
        return this._x1;
    }

    getY1() {
        return this._y1;
    }

    getX2() {
        return this._x2;
    }

    getY2() {
        return this._y2;
    }
}

// Clase Linea (en SVG) que usa la clase Punto
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

// Función para dibujar todas las primitivas
function dibujarPrimitivas(svg) {
    const puntoLinea = new Punto(50, 50, 200, 200); // Usando puntos para la línea
    const linea = new Linea(puntoLinea);

    const centroCircunferencia = new Punto(300, 100); // Usando puntos para la circunferencia
    const circunferencia = new Circunferencia(centroCircunferencia, 50);

    const centroElipse = new Punto(400, 300); // Usando puntos para la elipse
    const elipse = new Elipse(centroElipse, 80, 50);

    // Dibujar todas las primitivas
    linea.dibujar(svg);
    circunferencia.dibujar(svg);
    elipse.dibujar(svg);
}

// Obtener el lienzo SVG
const svgCanvas = document.getElementById('svgCanvas');

// Dibujar las primitivas
dibujarPrimitivas(svgCanvas);
