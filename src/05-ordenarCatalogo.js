/*
Una tienda quiere mostrar su catalogo ordenado de menor a mayor precio.
Escribe una funcion que reciba una lista de productos(nombre y precio) y los devuelva ordenados
por precio.
*/


function ordenarCatalogoPorPrecio(catalogo) {
  const catalogoOrdenado = [...catalogo];
  catalogoOrdenado.sort((a, b) => a.precio - b.precio);
  return catalogoOrdenado;
}

function ejecutarEjercicio05() {
  console.log('\n--- Opción 05: Ordenar Catálogo por Precio (Ascendente) ---'.blue);
  const catalogoInicial = [
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Webcam", precio: 35 }
  ];

  console.log('\nCatálogo Original:'.yellow);
  console.table(catalogoInicial);

  const catalogoOrdenado = ordenarCatalogoPorPrecio(catalogoInicial);

  console.log('\nCatálogo Ordenado por Precio:'.green);
  console.table(catalogoOrdenado);
  console.log('----------------------------------------------------------\n'.blue);
}

module.exports = {
  ejecutarEjercicio05
};