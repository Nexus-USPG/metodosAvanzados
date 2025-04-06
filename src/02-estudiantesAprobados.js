/*
Un colegio quiere conocer cuales estudiantes aprobaron una materia. Crea una funcion
que reciba una lista de estudiantes con sus notas y decuelva un nuevo arreglo con los estudiantes
cuya nota es mayor o igual a 60.
*/

function filtrarEstudiantesAprobados(listaEstudiantes) {
    const aprobados = listaEstudiantes.filter((estudiante) => {
        return Number(estudiante.nota) >= 60;
    });
    return aprobados;
}

function ejecutarEjercicioFiltro() {
    console.log('\n--- Opción 02: Filtrar Estudiantes Aprobados (Nota >= 60) ---'.blue);
    const estudiantes = [
        { nombre: "Ana", nota: 85 },
        { nombre: "Luis", nota: 45 },
        { nombre: "Elena", nota: 59 },
        { nombre: "Carlos", nota: 60 }, // Caso borde
        { nombre: "Marta", nota: 91 },
        { nombre: "Jorge", nota: 77 }
    ];

    console.log('\nLista completa de estudiantes:'.yellow);
    console.table(estudiantes);
    const estudiantesAprobados = filtrarEstudiantesAprobados(estudiantes);
    console.log('\nEstudiantes Aprobados:'.green);
    if (estudiantesAprobados.length > 0) {
        console.table(estudiantesAprobados);
    } else {
        console.log('No hay estudiantes aprobados en esta lista.'.magenta);
    }
    console.log('---------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicioFiltro
};