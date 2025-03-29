function ordenarPorPrecio(productos) {
    productos.sort(function(a, b) {
      return a.precio - b.precio;
    });
  
    console.log("Productos ordenados por precio:", productos);
  }

  let productos = [
    { nombre: "Crayones", precio: 100 },
    { nombre: "Marcadores", precio: 50 },
    { nombre: "Tijera", precio: 10 },
    { nombre: "Regla", precio: 15 }
  ];

  ordenarPorPrecio(productos);