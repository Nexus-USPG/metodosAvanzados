/*
Un sistema de gestión de empleados necesita agregar, eliminar y reemplazar empleados en una lista.
Escribe una función que use splice para:
1. Agregar un nuevo empleado.
2. Eliminar al segundo empleado.
3. Reemplazar al tercero por un nuevo empleado.
*/

function gestionarEmpleados(empleados, nuevoEmpleado1, empleadoAReemplazar) {
    if (!Array.isArray(empleados)) {
        console.log("La entrada debe ser una lista (arreglo) de empleados.".red);
        return; // No retorna nada, modifica el array directamente si es válido
    }

    console.log('\n--- Inicio Gestión ---'.cyan);
    console.log('Lista Inicial:'.yellow);
    console.table(empleados.slice());
    console.log(`\n1. Agregando a "${nuevoEmpleado1}" en índice 1...`.magenta);
    empleados.splice(1, 0, nuevoEmpleado1);
    console.log('Lista después de agregar:'.green);
    console.table(empleados.slice());
    if (empleados.length >= 2) {
        console.log(`\n2. Eliminando al empleado en índice 1 ("${empleados[1]}")...`.magenta);
        const eliminados = empleados.splice(1, 1); // Elimina 1 elemento en índice 1
        console.log('Empleado eliminado:', eliminados);
        console.log('Lista después de eliminar:'.green);
        console.table(empleados.slice());
    } else {
        console.log("\nNo hay suficientes empleados para eliminar el segundo.".yellow);
    }
    if (empleados.length >= 3) {
        const empleadoAntiguo = empleados[2];
        console.log(`\n3. Reemplazando al empleado en índice 2 ("${empleadoAntiguo}") por "${empleadoAReemplazar}"...`.magenta);
        const reemplazados = empleados.splice(2, 1, empleadoAReemplazar); // Elimina 1 en índice 2 y agrega el nuevo ahí
        console.log('Empleado reemplazado:', reemplazados);
        console.log('Lista después de reemplazar:'.green);
        console.table(empleados.slice());
    } else {
        console.log("\nNo hay suficientes empleados para reemplazar el tercero.".yellow);
    }

    console.log('\n--- Fin Gestión ---'.cyan);
}

// Función exportada para el CLI
function ejecutarEjercicio14() {
    console.log('\n--- Opción 14: Gestionar Lista de Empleados (splice) ---'.blue);
    let listaEmpleados = ["Ana", "Luis", "Carlos", "Maria"];
    const nuevoEmpleado = "Pedro";
    const reemplazo = "Sofia";
    gestionarEmpleados(listaEmpleados, nuevoEmpleado, reemplazo);

    console.log('\nLista Final de Empleados (estado final de la variable original):'.green);
    console.table(listaEmpleados);

    console.log('---------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio14
};