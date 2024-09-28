// Clase Punto (con encapsulamiento usando #)
class Punto {
    #x1;
    #y1;
    #x2;
    #y2;

    constructor(x1, y1, x2 = null, y2 = null) {
        this.#x1 = x1;
        this.#y1 = y1;
        this.#x2 = x2;
        this.#y2 = y2;
    }

    // Métodos para obtener los valores de las coordenadas
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
