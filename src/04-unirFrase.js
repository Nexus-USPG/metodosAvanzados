/*
Un sistema de mensajes guarda las palabras de una oración en una lista. Crea una función
que reciba esa lista de palabras y las una en una sola frase.["Hola", "mundo", "esto", "es", "JS"]
*/

function unirPalabrasEnFrase(listaPalabras) {
    if (!Array.isArray(listaPalabras) || listaPalabras.length === 0) {
        return "La lista de palabras está vacía o no es válida.";
    }
    return listaPalabras.join(' ');
}

function ejecutarEjercicio04() {
    console.log('\n--- Opción 04: Unir Palabras en Frase ---'.blue);
    const palabras = ["Hola", "mundo", "esto", "es", "JS"];

    console.log('\nLista de palabras original:'.yellow);
    console.log(palabras);

    const fraseUnida = unirPalabrasEnFrase(palabras);

    console.log('\nFrase resultante:'.green);
    console.log(`"${fraseUnida}"`);
    console.log('---------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio04
};