/**Un sistema de seguimiento de paquetes necesita encontrar la ubicación de un paquete en
un recorrido de entrega. Implementa una función llamada ubicacionDelPaquete que
encuentre el índice de la ubicación actual del paquete en el recorrido de entrega. La función
debe recibir el recorrido de entrega como parámetro, encontrar la ubicación del paquete y
luego mostrar la posición. */



function ubicacionDelPaquete(recorridoEntrega) {
    let indicePedido = recorrido.indexOf(recorridoEntrega)
    return indicePedido !==-1 ? `La ubicacion del paquete es: ${indicePedido} - ${recorrido[indicePedido]}` : `La Ubicacion del pedido es incorrecto: ${indicePedido}`
}

let recorrido = ['Obteniendo','Preparando','Empaquetando','Enviando','Entregado']
console.log(ubicacionDelPaquete('Entregado'))