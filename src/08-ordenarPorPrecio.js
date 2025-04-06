/*
Se necesita ordenar una lista de productos por precio, de menor a mayor.
Implementa una función que reciba la lista y la devuelva ordenada.
*/

function ordenarProductosPorPrecio(productos) {
    const productosOrdenados = [...productos]; // Copia para no mutar
    productosOrdenados.sort(function (a, b) {
        return a.precio - b.precio; // Orden ascendente
    });
    return productosOrdenados;
}

function ejecutarEjercicio08() {
    console.log('\n--- Opción 08: Ordenar Inventario por Precio (Ascendente) ---'.blue);
    let productos = [
        { nombre: "Crayones", precio: 100 },
        { nombre: "Marcadores", precio: 50 },
        { nombre: "Tijera", precio: 10 },
        { nombre: "Regla", precio: 15 }
    ];

    console.log('\nInventario Original:'.yellow);
    console.table(productos);

    const inventarioOrdenado = ordenarProductosPorPrecio(productos);

    console.log('\nInventario Ordenado por Precio:'.green);
    console.table(inventarioOrdenado);
    console.log('-------------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio08
};