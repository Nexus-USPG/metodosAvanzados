/**Una plataforma de cursos en línea quiere verificar si al menos un curso tiene un precio de
descuento. Escribe una función llamada verificarDescuento que determine si al menos uno
de los cursos en una lista tiene un precio de descuento. La función debe recibir la lista de
cursos como parámetro, verificar si hay algún curso con descuento y luego mostrar el
resultado. */



function verificarDescuento(listCursos) {
    let tieneDescuento = listCursos.some(curso => curso.precioDescuento < curso.precioNormal)
    return tieneDescuento ? `Si hay cursos con descuento` : `No hay cursos con descuento`
}


const cursos = [
    {curso: "Matemaicas",   precioNormal: 100, precioDescuento : 20 },
    {curso: "Programacion", precioNormal: 90,  precioDescuento : 90 },
    {curso: "Español",      precioNormal: 80,  precioDescuento : 80 },
    {curso: "Fisica",       precioNormal: 70,  precioDescuento : 70 },
    {curso: "Historia",     precioNormal: 60,  precioDescuento : 10 }
]

console.log(verificarDescuento(cursos))