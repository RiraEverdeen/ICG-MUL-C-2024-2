// Clases y encapsulamiento
class CoordenadasCartesianas {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }
}

class CoordenadasPolares {
    #radio;
    #angulo;

    constructor(radio, angulo) {
        this.#radio = radio;
        this.#angulo = angulo;
    }

    getRadio() {
        return this.#radio;
    }

    getAngulo() {
        return this.#angulo;
    }

    convertirACartesianas(centroX, centroY) {
        const anguloRad = this.#angulo * Math.PI / 180;
        const x = centroX + this.#radio * Math.cos(anguloRad);
        const y = centroY - this.#radio * Math.sin(anguloRad);
        return new CoordenadasCartesianas(x, y);
    }
}

function obtenerCentro(tipoCoordenadas) {
    if (tipoCoordenadas === 'cartesiano') {
        const x = parseFloat(document.getElementById('centroX').value);
        const y = parseFloat(document.getElementById('centroY').value);
        return new CoordenadasCartesianas(x, y);
    } else if (tipoCoordenadas === 'polar') {
        const radio = parseFloat(document.getElementById('radio').value);
        const angulo = parseFloat(document.getElementById('angulo').value);
        const coordenadasPolares = new CoordenadasPolares(radio, angulo);
        return coordenadasPolares.convertirACartesianas(canvas.width / 2, canvas.height / 2);
    }
}
