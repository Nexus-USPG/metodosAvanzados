/* El mismo colegio quiere saber cuántos estudiantes aprobaron. 
   Usa la lista anterior y crea una función que devuelva la cantidad total de estudiantes aprobados. */

   const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 45 },
    { nombre: "Carla", nota: 70 }
];

const cantidadEstudiantesAprobados = estudiantes.reduce((total, estudiante) => {
    return estudiante.nota > 60 ? total + 1 : total;
}, 0);

console.log(cantidadEstudiantesAprobados);