/**Un juego de búsqueda de tesoros necesita verificar si un tesoro está presente en un área
específica del mapa. Crea una función llamada verificar Tesoro que verifique si el tesoro está
resente en una lista de áreas del mapa. La función debe recibir la lista de áreas y el tesoro a
uscar como parámetros, verificar si el tesoro está presente y luego mostrar si se encontró o
no. */
function verificarTesoro(areas, tesoroBusqueda) {
    let EncontroTesoro = areas.includes(tesoroBusqueda)
    return EncontroTesoro ? `¡Felicidades has encontrado el tesoro en la posición del mapa #${tesoroBusqueda}!` : `El tesoro no se ha encontrado, vuelve a intentarlo`
}

let areasTesoro = [2,4,6,8,10,12,14,16,18,20]

console.log(verificarTesoro(areasTesoro, 19))


