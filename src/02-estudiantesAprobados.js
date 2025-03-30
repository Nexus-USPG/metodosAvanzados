/*Un colegio quiere conocer cuales estudiantes aprobaron una materia.Crea una funcion
que reciba una lista de estudiantes con sus notas y decuelva un nuevo arreglo con los estudiantes 
cuya nota es mayor o igual a 60. [{nombre: "Ana", nota: "85"},{nombre: "Luis", nota: "45"},
{nombre: "Carla", nota: "70"}]*/

const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 45 },
    { nombre: "Carla", nota: 70 }
];

const estudiantesAprobados = estudiantes.filter((estudiante) => estudiante.nota >= 60);
console.log(estudiantesAprobados); 
