/*
Una aplicación de edición de imágenes necesita recortar una parte específica de una foto (matriz).
Implementa una función que use slice para extraer una sección de filas.
*/


function recortarImagenPorFilas(imagen, filaInicio, filaFin) {
    if (!Array.isArray(imagen)) {
        console.log("La entrada de la imagen debe ser un arreglo (matriz).".red);
        return null;
    }
    if (filaInicio < 0 || filaFin > imagen.length || filaInicio >= filaFin) {
        console.log(`Índices de recorte (${filaInicio}, ${filaFin}) inválidos para una imagen de ${imagen.length} filas.`.red);
        return null;
    }
    return imagen.slice(filaInicio, filaFin);
}
function ejecutarEjercicio13() {
    console.log('\n--- Opción 13: Recortar Filas de Imagen (Matriz) (slice) ---'.blue);
    // Simulación de una imagen pequeña como matriz (array de arrays)
    const imagenOriginal = [
        ['R', 'G', 'B', 'W'], // Fila 0
        ['R', 'G', 'B', 'W'], // Fila 1
        ['B', 'W', 'R', 'G'], // Fila 2
        ['B', 'W', 'R', 'G'], // Fila 3
        ['G', 'B', 'W', 'R']  // Fila 4
    ];
    const inicio = 1; // Incluye fila 1
    const fin = 4;    // Excluye fila 4 (toma filas 1, 2, 3)

    console.log('\nImagen Original (Matriz):'.yellow);
    console.table(imagenOriginal);
    console.log(`\nRecortando desde fila ${inicio} hasta fila ${fin} (exclusivo)...`.yellow);

    const imagenRecortada = recortarImagenPorFilas(imagenOriginal, inicio, fin);

    if (imagenRecortada) {
        console.log('\nSección Recortada:'.green);
        console.table(imagenRecortada);
        console.log('\nImagen Original (sin cambios):'.gray);
        console.table(imagenOriginal);
    } else {
        console.log("No se pudo realizar el recorte.".red);
    }


    console.log('--------------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio13
};