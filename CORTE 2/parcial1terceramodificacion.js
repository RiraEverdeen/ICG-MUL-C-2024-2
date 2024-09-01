class CanvasApp {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        this.dibujarPlanoCartesiano();

        // Obtener los elementos del DOM para coordinar el manejo de los datos
        this.coordenadasSelect = document.getElementById('coordenadas');
        this.coordenadasCartesianasDiv = document.getElementById('coordenadasCartesianas');
        this.coordenadasPolaresDiv = document.getElementById('coordenadasPolares');

        // Evento para actualizar los campos al cambiar el tipo de coordenadas
        this.coordenadasSelect.addEventListener('change', () => this.actualizarCampos());
    }

    dibujarPlanoCartesiano() {
        // Código para dibujar el plano cartesiano
        this.ctx.strokeStyle = "#ddd";
        this.ctx.lineWidth = 1;

        for (let x = 0; x <= this.width; x += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
            this.ctx.stroke();
        }

        for (let y = 0; y <= this.height; y += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
        }

        this.ctx.strokeStyle = "#000";
        this.ctx.beginPath();
        this.ctx.moveTo(this.width / 2, 0);
        this.ctx.lineTo(this.width / 2, this.height);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height / 2);
        this.ctx.lineTo(this.width, this.height / 2);
        this.ctx.stroke();
    }

    // Método para actualizar los campos visibles según el tipo de coordenadas
    actualizarCampos() {
        const tipoCoordenadas = this.coordenadasSelect.value;

        if (tipoCoordenadas === 'cartesianas') {
            this.coordenadasCartesianasDiv.style.display = 'block';
            this.coordenadasPolaresDiv.style.display = 'none';
        } else {
            this.coordenadasCartesianasDiv.style.display = 'none';
            this.coordenadasPolaresDiv.style.display = 'block';
        }
    }
}

// Inicializar la aplicación cuando la página cargue
window.onload = function() {
    const app = new CanvasApp('canvas');
};
