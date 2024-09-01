// Clase principal que maneja la lógica del canvas
class CanvasApp {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        // Dibujar el plano cartesiano inicial
        this.dibujarPlanoCartesiano();
    }

    // Método para dibujar el plano cartesiano en el canvas
    dibujarPlanoCartesiano() {
        // Dibujar líneas horizontales y verticales para formar la cuadrícula
        this.ctx.strokeStyle = "#ddd";
        this.ctx.lineWidth = 1;

        // Líneas verticales
        for (let x = 0; x <= this.width; x += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
            this.ctx.stroke();
        }

        // Líneas horizontales
        for (let y = 0; y <= this.height; y += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
        }

        // Dibujar los ejes X e Y en el centro
        this.ctx.strokeStyle = "#000"; // Ejes en color negro
        this.ctx.beginPath();
        this.ctx.moveTo(this.width / 2, 0); // Eje Y
        this.ctx.lineTo(this.width / 2, this.height);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height / 2); // Eje X
        this.ctx.lineTo(this.width, this.height / 2);
        this.ctx.stroke();
    }
}

// Inicializar la aplicación cuando la página cargue
window.onload = function() {
    const app = new CanvasApp('canvas');
};
