/**Una aplicación de gestión de eventos necesita enviar un correo de confirmación
personalizado a cada asistente. Implementa una función llamada enviarCorreoConfirmacion
que envíe un correo de confirmación personalizado a cada asistente a un evento. La función
debe recibir la lista de asistentes y enviar un correo de confirmación a cada uno, luego
mostrar un mensaje de confirmación para cada asistente. */

function enviarCorreoConfirmacion(listaAsistentes) {
    listaAsistentes.forEach(asistente => {
        console.log(`De:Confirmacion_eventos@enventos.com.gt\nPara:${asistente.correo}\n\nHola buenos dias ${asistente.nombre} se confirma su asistencia al evento\n\n`)
    })
}

const asistentes = [
    {nombre: "DALLIN OSORIO",   correo: "dallin.osorio@gmail.com"},
    {nombre: "DANIEL RAMIREZ",  correo: "daniel.ramirez@gmail.com"},
    {nombre: "BETZA OSORIO",    correo: "betza.osorio@gmail.com"},
    {nombre: "JENNIFER DUQUE",  correo: "jennifer.osorio@gmail.com"},
    {nombre: "VALERIA POSADAS", correo: "valeria.osorio@gmail.com"}
]

console.log(enviarCorreoConfirmacion(asistentes))