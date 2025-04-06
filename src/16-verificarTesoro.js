/**
 Un juego de búsqueda de tesoros necesita verificar si un tesoro está presente en un área
 específica del mapa (representado por números en una lista). Crea una función llamada verificarTesoro que verifique si el tesoro está
 presente en una lista de áreas del mapa. La función debe recibir la lista de áreas y el tesoro a
 buscar como parámetros, verificar si el tesoro está presente y luego mostrar si se encontró o no.
 */

function verificarSiTesoroExiste(areas, tesoroBusqueda) {
    let encontroTesoro = areas.includes(tesoroBusqueda);
    if (encontroTesoro) {
        return `¡Felicidades! Has encontrado el tesoro en el área #${tesoroBusqueda}!`.green;
    } else {
        return `El tesoro no se encuentra en el área #${tesoroBusqueda}. Sigue buscando.`.red;
    }
}

function ejecutarEjercicio16() {
    console.log('\n--- Opción 16: Verificar Existencia de Tesoro (includes) ---'.blue);
    const areasConTesoro = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const areaABuscar1 = 12;
    const areaABuscar2 = 7;

    console.log('\nÁreas del Mapa con Tesoros:'.yellow);
    console.table(areasConTesoro);

    console.log(`\nBuscando tesoro en área: ${areaABuscar1}`.yellow);
    const resultado1 = verificarSiTesoroExiste(areasConTesoro, areaABuscar1);
    console.log(resultado1);

    console.log(`\nBuscando tesoro en área: ${areaABuscar2}`.yellow);
    const resultado2 = verificarSiTesoroExiste(areasConTesoro, areaABuscar2);
    console.log(resultado2);

    console.log('-----------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio16
};

