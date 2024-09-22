function dibujarPrimitivas(svg) {
    const linea = new Linea(50, 50, 200, 200);
    const circunferencia = new Circunferencia(300, 100, 50);
    const elipse = new Elipse(400, 300, 80, 50);

    linea.dibujar(svg);
    circunferencia.dibujar(svg);
    elipse.dibujar(svg);
}

dibujarPrimitivas(svgCanvas);
