/*
Un gestor de tareas necesita agregar una tarea urgente al inicio de la lista.
Implementa una función que reciba la lista de tareas y la nueva tarea urgente, y la agregue al principio.
*/


function priorizarTareaEnLista(tareas, tareaUrgente) {
    tareas.unshift(tareaUrgente);
}
function ejecutarEjercicio07() {
    console.log('\n--- Opción 07: Priorizar Tarea Urgente (unshift) ---'.blue);
    let tareasPendientes = [
        "Ir de compras",
        "Lavar los platos",
        "Ordenar la habitacion"
    ];
    const tareaPrioritaria = "Estudiar para el examen";

    console.log('\nLista de Tareas Inicial:'.yellow);
    console.table(tareasPendientes);
    console.log('\nTarea a priorizar:'.yellow);
    console.log(tareaPrioritaria);

    priorizarTareaEnLista(tareasPendientes, tareaPrioritaria);

    console.log('\nLista de Tareas Actualizada:'.green);
    console.table(tareasPendientes);
    console.log('-----------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicio07
};