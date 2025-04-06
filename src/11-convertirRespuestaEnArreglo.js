/*
Un juego de adivinanzas necesita convertir la respuesta del jugador (una cadena de texto)
en un arreglo de letras para validarla. Implementa una función que use Array.from y
luego valide si la respuesta es correcta.
*/

function convertirRespuestaEnArreglo(respuesta) {
    if (typeof respuesta !== 'string') {
        console.log("La entrada debe ser una cadena de texto.".red);
        return null;
    }
    return Array.from(respuesta);
}

function validarRespuesta(respuestaArray, respuestaCorrectaArray) {
    // Comprobación básica si los arrays son válidos
    if (!Array.isArray(respuestaArray) || !Array.isArray(respuestaCorrectaArray)) {
        return false;
    }

    // 1. Comprobar si tienen la misma longitud
    if (respuestaArray.length !== respuestaCorrectaArray.length) {
        return false;
    }

    // 2. Comprobar si cada letra coincide en la misma posición
    const esIdentico = respuestaArray.every((letra, index) => {
        return letra === respuestaCorrectaArray[index];
    });

    return esIdentico;
}

// --- Función exportada para el CLI ---
function ejecutarEjercicio11() {
    console.log('\n--- Opción 11: Convertir String a Array y Validar Respuesta (Array.from) ---'.blue);

    const palabraCorrecta = "javascript";
    const respuestaCorrectaArray = Array.from(palabraCorrecta);

    const intentoJugadorCorrecto = "javascript";
    const intentoJugadorIncorrecto = "java";
    const intentoJugadorLongitudErronea = "javascrip";
    const entradaInvalida = 12345; // Para probar el manejo de errores

    console.log(`La palabra a adivinar es: "${palabraCorrecta}"`.cyan);

    // --- Prueba 1: Intento Correcto ---
    console.log(`\nIntento del jugador: "${intentoJugadorCorrecto}"`.yellow);
    const arregloIntentoCorrecto = convertirRespuestaEnArreglo(intentoJugadorCorrecto);
    if (arregloIntentoCorrecto) {
        console.log('Intento convertido a Array:', arregloIntentoCorrecto);
        const resultadoValidacion1 = validarRespuesta(arregloIntentoCorrecto, respuestaCorrectaArray);
        console.log('¿El intento es correcto?'.cyan, resultadoValidacion1 ? 'Sí, ¡Adivinaste!'.green : 'No'.red);
    }

    // --- Prueba 2: Intento Incorrecto (Contenido diferente) ---
    console.log(`\nIntento del jugador: "${intentoJugadorIncorrecto}"`.yellow);
    const arregloIntentoIncorrecto = convertirRespuestaEnArreglo(intentoJugadorIncorrecto);
    if (arregloIntentoIncorrecto) {
        console.log('Intento convertido a Array:', arregloIntentoIncorrecto);
        const resultadoValidacion2 = validarRespuesta(arregloIntentoIncorrecto, respuestaCorrectaArray);
        console.log('¿El intento es correcto?'.cyan, resultadoValidacion2 ? 'Sí, ¡Adivinaste!'.green : 'No, sigue intentando.'.red);
    }

    // --- Prueba 3: Intento Incorrecto (Longitud diferente) ---
    console.log(`\nIntento del jugador: "${intentoJugadorLongitudErronea}"`.yellow);
    const arregloIntentoLongitudErronea = convertirRespuestaEnArreglo(intentoJugadorLongitudErronea);
    if (arregloIntentoLongitudErronea) {
        console.log('Intento convertido a Array:', arregloIntentoLongitudErronea);
        const resultadoValidacion3 = validarRespuesta(arregloIntentoLongitudErronea, respuestaCorrectaArray);
        console.log('¿El intento es correcto?'.cyan, resultadoValidacion3 ? 'Sí, ¡Adivinaste!'.green : 'No, sigue intentando.'.red);
    }

    // --- Prueba 4: Entrada Inválida ---
    console.log('\nIntento del jugador: (entrada inválida)'.yellow, entradaInvalida);
    convertirRespuestaEnArreglo(entradaInvalida);

    console.log('--------------------------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio11
};