/*
Una lista de reproducción necesita reproducir y remover la primera canción.
Implementa una función que remueva y muestre la primera canción de la lista.
*/

function removerPrimeraCancion(lista) {
    if (lista.length === 0) {
        return null;
    }
    let cancionRemovida = lista.shift();
    return cancionRemovida;
}

function ejecutarEjercicio10() {
    console.log('\n--- Opción 10: Remover Primera Canción de Lista (shift) ---'.blue);
    let listaDeReproduccion = [
        { nombre: "SNAP", artista: "Artista 1" },
        { nombre: "Perfecta", artista: "Artista 2" },
        { nombre: "Sunflower", artista: "Artista 3" },
        { nombre: "I choose", artista: "Artista 4" }
    ];

    console.log('\nLista de Reproducción Inicial:'.yellow);
    console.table(listaDeReproduccion);

    const cancionReproducida = removerPrimeraCancion(listaDeReproduccion);

    if (cancionReproducida) {
        console.log('\nCanción Removida (Reproducida):'.magenta);
        console.log(cancionReproducida);
        console.log('\nLista de Reproducción Actualizada:'.green);
        console.table(listaDeReproduccion);
    } else {
        console.log('\nLa lista de reproducción está vacía.'.magenta);
    }
    console.log('----------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio10
};