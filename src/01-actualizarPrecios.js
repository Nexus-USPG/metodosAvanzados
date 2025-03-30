/*Una tienda quiere mostrar los precios finales de sus productos,incluyendo el 21% de IVA. 
Crea una función que reciba una lista de productos sin IVA y devuelva una lista con los precios
actualizados.*/

function agregarIVA(producto) {
    const productosconIVA = producto.map((producto) => {
        producto.precio = producto.precio * 1.21;
        return producto;
    })
    return productosconIVA;
}

const producto = [
    {nombre: 'Producto 1', precio: 100},
    {nombre: 'Producto 2', precio: 150},
    {nombre: 'Producto 3', precio: 200},
]

const productosconIVA = agregarIVA(producto)
console.log(productosconIVA)