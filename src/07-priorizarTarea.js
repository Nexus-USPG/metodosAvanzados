function priorizarTarea(tarea) {

    tareasPendientes.unshift(tarea);
    console.log("Lista de tareas actualizada:", tareasPendientes);
}

let tareasPendientes = [
    "Ir de compras",
    "Lavar los platos",
    "Ordenar la habitacion"
  ];

  priorizarTarea("Estudiar para el examen");