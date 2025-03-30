/*Una tienda quiere mostrar su catalogo ordenado de menor a mayor precio.
Escribe una funcion que reciba una lista de productos(nombre y precio) y los devuelva ordenados 
por precio.[{nombre: "Mouse", precio: 20}, {nombre: "Teclado", precio: 50}, 
{nombre: "Monitor", precio: 150}]
*/
const catalogo = [
  { nombre: "Mouse", precio: 20 },  
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 150 }
]

catalogo.sort((a, b) =>  b.precio - a.precio)
console.log(catalogo)

