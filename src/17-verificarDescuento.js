/**
 Una plataforma de cursos en línea quiere verificar si al menos un curso tiene un precio de
 descuento. Escribe una función llamada verificarDescuento que determine si al menos uno
 de los cursos en una lista tiene un precio de descuento (precioDescuento < precioNormal).
 La función debe recibir la lista de cursos como parámetro, verificar y mostrar el resultado.
 */

function hayAlMenosUnDescuento(listaCursos) {
    let tieneDescuento = listaCursos.some(curso => curso.precioDescuento < curso.precioNormal);
    return tieneDescuento;
}

// Función exportada para el CLI
function ejecutarEjercicio17() {
    console.log('\n--- Opción 17: Verificar si Hay Cursos con Descuento (some) ---'.blue);
    const cursos = [
        { curso: "Matemáticas", precioNormal: 100, precioDescuento: 80 }, // Sí tiene
        { curso: "Programación", precioNormal: 90, precioDescuento: 90 }, // No tiene
        { curso: "Español", precioNormal: 80, precioDescuento: 80 }, // No tiene
        { curso: "Física", precioNormal: 70, precioDescuento: 70 }, // No tiene
        { curso: "Historia", precioNormal: 60, precioDescuento: 55 } // Sí tiene
    ];
    const cursosSinDescuento = [
        { curso: "Arte", precioNormal: 50, precioDescuento: 50 },
        { curso: "Música", precioNormal: 60, precioDescuento: 60 }
    ];

    console.log('\nLista de Cursos 1:'.yellow);
    console.table(cursos);

    const resultado1 = hayAlMenosUnDescuento(cursos);
    console.log('\n¿Hay algún curso con descuento en la lista 1?'.yellow);
    console.log(resultado1 ? 'Sí, al menos un curso tiene descuento.'.green : 'No, ningún curso tiene descuento.'.red);

    console.log('\nLista de Cursos 2:'.yellow);
    console.table(cursosSinDescuento);

    const resultado2 = hayAlMenosUnDescuento(cursosSinDescuento);
    console.log('\n¿Hay algún curso con descuento en la lista 2?'.yellow);
    console.log(resultado2 ? 'Sí, al menos un curso tiene descuento.'.green : 'No, ningún curso tiene descuento.'.red);


    console.log('------------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio17
};