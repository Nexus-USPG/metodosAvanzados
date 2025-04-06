/* Una tienda quiere mostrar los precios finales de sus productos, incluyendo el 21% de IVA.
Crea una función que reciba una lista de productos sin IVA y devuelva una lista con los precios
actualizados.*/
function agregarIVA(productos) {
    let productosConIVA;
    productosConIVA = productos.map((producto) => {
        return {
            ...producto,
            precio: parseFloat((producto.precio * 1.21).toFixed(2))
        };
    });
    return productosConIVA;
}


function ejecutarEjercicioIVA() {
    console.log('\n--- Opción 01: Calcular IVA (21%) ---'.blue);
    const productosSinIVA = [
        { nombre: 'Camisa Casual', precio: 25.00 },
        { nombre: 'Pantalón Jeans', precio: 40.50 },
        { nombre: 'Zapatos Deportivos', precio: 89.99 },
    ];

    console.log('\nProductos Originales:'.yellow);
    console.table(productosSinIVA);

    const productosConIVA = agregarIVA(productosSinIVA);
    console.log('\nProductos con IVA incluido:'.green);
    console.table(productosConIVA);
    console.log('--------------------------------------\n'.blue);
}
module.exports = {
    ejecutarEjercicioIVA
};