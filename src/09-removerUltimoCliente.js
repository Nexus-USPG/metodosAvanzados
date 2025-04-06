/*
Un sistema de atención al cliente necesita atender al último cliente que llegó (LIFO - aunque pop es FIFO en comportamiento de array).
Implementa una función que remueva y muestre al último cliente de la cola.
Nota: pop remueve el *último* elemento del array.
*/

function removerUltimoClienteDeCola(cola) {
    if (cola.length === 0) {
        return null;
    }
    // pop modifica el array original y devuelve el elemento removido.
    let clienteRemovido = cola.pop();
    return clienteRemovido;
}
function ejecutarEjercicio09() {
    console.log('\n--- Opción 09: Remover Último Cliente de la Cola (pop) ---'.blue);
    let colaDeEspera = [
        { nombre: "Jose", id: 1 },
        { nombre: "Marcela", id: 2 },
        { nombre: "Luis", id: 3 },
        { nombre: "Mario", id: 4 }
    ];

    console.log('\nCola de Espera Inicial:'.yellow);
    console.table(colaDeEspera);

    const clienteAtendido = removerUltimoClienteDeCola(colaDeEspera);

    if (clienteAtendido) {
        console.log('\nCliente Removido (Atendido):'.magenta);
        console.log(clienteAtendido);
        console.log('\nCola de Espera Actualizada:'.green);
        console.table(colaDeEspera);
    } else {
        console.log('\nLa cola de espera está vacía.'.magenta);
    }
    console.log('---------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio09
};