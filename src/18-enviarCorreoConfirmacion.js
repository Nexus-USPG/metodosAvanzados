/*
 Una aplicación de gestión de eventos necesita enviar un correo de confirmación
 personalizado a cada asistente. Implementa una función llamada enviarCorreoConfirmacion
 que "envíe" (simule con console.log) un correo de confirmación personalizado a cada asistente.
 La función debe recibir la lista de asistentes y mostrar un mensaje por cada uno.
 */

function enviarCorreos(listaAsistentes) {
    if (listaAsistentes.length === 0) {
        console.log("No hay asistentes en la lista para enviar correos.".magenta);
        return;
    }
    listaAsistentes.forEach(asistente => {
        console.log(`----------------------------------------`.gray);
        console.log(`De: Confirmacion_eventos@eventos.com.gt`.cyan);
        console.log(`Para: ${asistente.correo}`.cyan);
        console.log(`\nHola ${asistente.nombre},`.green);
        console.log(`Se confirma tu asistencia al evento "Gran Conferencia Tech".`.green);
        console.log(`¡Esperamos verte pronto!\n`.green);
    });
    console.log(`----------------------------------------`.gray);
}

function ejecutarEjercicio18() {
    console.log('\n--- Opción 18: Enviar Correos de Confirmación (forEach) ---'.blue);
    const asistentes = [
        { nombre: "DALLIN OSORIO", correo: "dallin.osorio@gmail.com" },
        { nombre: "DANIEL RAMIREZ", correo: "daniel.ramirez@gmail.com" },
        { nombre: "BETZA OSORIO", correo: "betza.osorio@gmail.com" },
        { nombre: "JENNIFER DUQUE", correo: "jennifer.duque@gmail.com" },
        { nombre: "VALERIA POSADAS", correo: "valeria.posadas@gmail.com" }
    ];

    console.log('\nLista de Asistentes:'.yellow);
    console.table(asistentes);

    console.log('\nSimulando envío de correos:'.magenta);
    enviarCorreos(asistentes);

    console.log('\nProceso de envío simulado completado.'.green);
    console.log('----------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio18
};