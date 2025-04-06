/*
El mismo colegio quiere saber cuántos estudiantes aprobaron.
Usa la lista anterior y crea una función que devuelva la cantidad total de estudiantes aprobados.
*/

function contarEstudiantesAprobados(listaEstudiantes) {
    const cantidad = listaEstudiantes.reduce((total, estudiante) => {
        return Number(estudiante.nota) >= 60 ? total + 1 : total;
    }, 0);
    return cantidad;
}

function ejecutarEjercicioContar() {
    console.log('\n--- Opción 03: Contar Estudiantes Aprobados (Nota >= 60) ---'.blue);

    const estudiantes = [
        { nombre: "Ana", nota: 85 },
        { nombre: "Luis", nota: 45 },
        { nombre: "Elena", nota: 59 },
        { nombre: "Carlos", nota: 60 },
        { nombre: "Marta", nota: 91 },
        { nombre: "Jorge", nota: 77 },
        { nombre: "Sofia", nota: 33 }
    ];

    console.log('\nLista completa de estudiantes:'.yellow);
    console.table(estudiantes);

    const cantidadAprobados = contarEstudiantesAprobados(estudiantes);

    console.log('\nCantidad de Estudiantes Aprobados:'.green);
    console.log(`${cantidadAprobados} de ${estudiantes.length} estudiantes.`);

    console.log('---------------------------------------------------------\n'.blue);
}

module.exports = {
    ejecutarEjercicioContar
};