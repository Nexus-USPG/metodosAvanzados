/**
 Un sistema de seguimiento de paquetes necesita encontrar la ubicación de un paquete en
 un recorrido de entrega. Implementa una función llamada ubicacionDelPaquete que
 encuentre el índice de la ubicación actual del paquete en el recorrido de entrega. La función
 debe recibir el recorrido de entrega como parámetro, encontrar la ubicación del paquete y
 luego mostrar la posición.
 */

function encontrarUbicacionPaquete(recorrido, estadoBuscado) {
    let indicePedido = recorrido.indexOf(estadoBuscado);
    if (indicePedido !== -1) {
        return `La ubicación del paquete es el índice: ${indicePedido} (${recorrido[indicePedido]})`.green;
    } else {
        return `El estado "${estadoBuscado}" no se encontró en el recorrido.`.red;
    }
}

function ejecutarEjercicio15() {
    console.log('\n--- Opción 15: Encontrar Ubicación de Paquete (indexOf) ---'.blue);
    const recorrido = ['Obteniendo', 'Preparando', 'Empaquetando', 'Enviando', 'Entregado'];
    const estadoActual = 'Enviando'; // Estado a buscar

    console.log('\nRecorrido de Entrega:'.yellow);
    console.table(recorrido);
    console.log(`\nBuscando estado: "${estadoActual}"`.yellow);

    const resultadoBusqueda = encontrarUbicacionPaquete(recorrido, estadoActual);

    console.log('\nResultado de la búsqueda:');
    console.log(resultadoBusqueda);

    // Ejemplo con estado no encontrado
    console.log(`\nBuscando estado: "Perdido"`.yellow);
    const resultadoBusquedaFallida = encontrarUbicacionPaquete(recorrido, "Perdido");
    console.log('\nResultado de la búsqueda:');
    console.log(resultadoBusquedaFallida);

    console.log('-----------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio15
};