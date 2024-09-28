// Clase Punto (encapsulada para manejar las coordenadas de forma segura)
class Punto {
    // Atributos privados para asegurar el encapsulamiento
    #x1;
    #y1;
    #x2;
    #y2;

    // Constructor que inicializa las coordenadas
    // Si no se especifican x2 e y2, se toman como null (para figuras como circunferencia y elipse)
    constructor(x1, y1, x2 = null, y2 = null) {
        this.#x1 = x1;
        this.#y1 = y1;
        this.#x2 = x2;
        this.#y2 = y2;
    }

    // Métodos públicos (getters) para acceder a las coordenadas de forma controlada
    // El encapsulamiento evita que las coordenadas puedan ser modificadas directamente
    getX1() {
        return this.#x1;
    }

    getY1() {
        return this.#y1;
    }

    getX2() {
        return this.#x2;
    }

    getY2() {
        return this.#y2;
    }
}

// Clase Linea (utilizando el objeto Punto para las coordenadas)
class Linea {
    // Atributo privado para encapsular el punto que define los extremos de la línea
    #punto;

    // Constructor que recibe un objeto Punto (que ya contiene las coordenadas)
    constructor(punto) {
        this.#punto = punto;
    }

    // Método para dibujar la línea en el lienzo SVG
    dibujar(svg) {
        // Se crea el elemento SVG de tipo "line"
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");

        // Se asignan las coordenadas usando los getters de la clase Punto
        linea.setAttribute("x1", this.#punto.getX1());
        linea.setAttribute("y1", this.#punto.getY1());
        linea.setAttribute("x2", this.#punto.getX2());
        linea.setAttribute("y2", this.#punto.getY2());

        // Se define el estilo de la línea (color negro)
        linea.setAttribute("stroke", "black");

        // Se añade la línea al lienzo SVG
        svg.appendChild(linea);

        // Aquí es donde se podría incluir la lógica del algoritmo de Bresenham
        // para optimizar el dibujo de líneas en sistemas rasterizados
    }
}

// Clase Circunferencia (utilizando un objeto Punto para el centro)
class Circunferencia {
    // Atributos privados para el centro de la circunferencia y el radio
    #centro;
    #r;

    // Constructor que recibe el centro como un objeto Punto y el radio
    constructor(centro, radio) {
        this.#centro = centro;
        this.#r = radio;
    }

    // Método para dibujar la circunferencia en el lienzo SVG
    dibujar(svg) {
        // Se crea el elemento SVG de tipo "circle"
        const circunferencia = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        // Se asignan las coordenadas del centro usando los getters de la clase Punto
        circunferencia.setAttribute("cx", this.#centro.getX1());
        circunferencia.setAttribute("cy", this.#centro.getY1());

        // Se asigna el radio de la circunferencia
        circunferencia.setAttribute("r", this.#r);

        // Se define el estilo de la circunferencia (solo borde, sin relleno)
        circunferencia.setAttribute("stroke", "black");
        circunferencia.setAttribute("fill", "none");

        // Se añade la circunferencia al lienzo SVG
        svg.appendChild(circunferencia);
    }
}

// Clase Elipse (utilizando un objeto Punto para el centro)
class Elipse {
    // Atributos privados para el centro, el radio en X y el radio en Y
    #centro;
    #rx;
    #ry;

    // Constructor que recibe el centro como un objeto Punto y los radios
    constructor(centro, radioX, radioY) {
        this.#centro = centro;
        this.#rx = radioX;
        this.#ry = radioY;
    }

    // Método para dibujar la elipse en el lienzo SVG
    dibujar(svg) {
        // Se crea el elemento SVG de tipo "ellipse"
        const elipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

        // Se asignan las coordenadas del centro usando los getters de la clase Punto
        elipse.setAttribute("cx", this.#centro.getX1());
        elipse.setAttribute("cy", this.#centro.getY1());

        // Se asignan los radios en X y en Y
        elipse.setAttribute("rx", this.#rx);
        elipse.setAttribute("ry", this.#ry);

        // Se define el estilo de la elipse (solo borde, sin relleno)
        elipse.setAttribute("stroke", "black");
        elipse.setAttribute("fill", "none");

        // Se añade la elipse al lienzo SVG
        svg.appendChild(elipse);
    }
}

// Función principal para dibujar todas las primitivas geométricas en el lienzo SVG
function dibujarPrimitivas(svg) {
    // Creación de los puntos para la línea
    const puntoLinea = new Punto(50, 50, 200, 200); // Puntos para los extremos de la línea
    const linea = new Linea(puntoLinea); // Se crea una nueva línea usando los puntos

    // Creación del punto para la circunferencia
    const centroCircunferencia = new Punto(300, 100); // Punto que define el centro de la circunferencia
    const circunferencia = new Circunferencia(centroCircunferencia, 50); // Se crea una nueva circunferencia

    // Creación del punto para la elipse
    const centroElipse = new Punto(400, 300); // Punto que define el centro de la elipse
    const elipse = new Elipse(centroElipse, 80, 50); // Se crea una nueva elipse

    // Dibujar las primitivas en el lienzo SVG
    linea.dibujar(svg); // Dibujar la línea
    circunferencia.dibujar(svg); // Dibujar la circunferencia
    elipse.dibujar(svg); // Dibujar la elipse
}

// Obtener el lienzo SVG desde el HTML
const svgCanvas = document.getElementById('svgCanvas');

// Llamar a la función para dibujar las primitivas geométricas
dibujarPrimitivas(svgCanvas);



