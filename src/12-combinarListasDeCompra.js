/*
Un supermercado quiere combinar dos listas de compras de diferentes clientes en una sola.
Crear una función que use concat para unir las listas.
*/

function combinarListasDeCompra(lista1, lista2) {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
        console.log("Ambas entradas deben ser arreglos (listas).".red);
        return null;
    }
    return lista1.concat(lista2);
}

function ejecutarEjercicio12() {
    console.log('\n--- Opción 12: Combinar Listas de Compras (concat) ---'.blue);
    const listaCliente1 = ['Manzanas', 'Leche', 'Pan'];
    const listaCliente2 = ['Huevos', 'Queso', 'Jugo', 'Cereal'];

    console.log('\nLista de Compras Cliente 1:'.yellow);
    console.log(listaCliente1);
    console.log('\nLista de Compras Cliente 2:'.yellow);
    console.log(listaCliente2);

    const listaCombinada = combinarListasDeCompra(listaCliente1, listaCliente2);

    if (listaCombinada) {
        console.log('\nLista de Compras Combinada:'.green);
        console.log(listaCombinada);

        console.log('\nLista Cliente 1 (sin cambios):'.gray);
        console.log(listaCliente1);
        console.log('Lista Cliente 2 (sin cambios):'.gray);
        console.log(listaCliente2);
    }

    console.log('-------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio12
};