/*
Una tienda necesita agregar un nuevo producto a su catálogo existente.
Implementa una función que reciba el catálogo y el nuevo producto, y lo agregue al final.
*/

function agregarProductoAlCatalogo(catalogo, nuevoProducto) {
    catalogo.push(nuevoProducto);
}

function ejecutarEjercicio06() {
    console.log('\n--- Opción 06: Agregar Producto al Catálogo (push) ---'.blue);
    let catalogo = [
        { nombre: "Tennis", precio: 150 },
        { nombre: "Bolso", precio: 500 },
        { nombre: "Reloj", precio: 300 }
    ];
    const productoNuevo = { nombre: "Gorra", precio: 100 };

    console.log('\nCatálogo Inicial:'.yellow);
    console.table(catalogo);
    console.log('\nProducto a agregar:'.yellow);
    console.log(productoNuevo);
    agregarProductoAlCatalogo(catalogo, productoNuevo);

    console.log('\nCatálogo Actualizado:'.green);
    console.table(catalogo);
    console.log('-----------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio06
};