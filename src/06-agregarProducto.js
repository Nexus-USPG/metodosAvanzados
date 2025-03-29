function agregarProducto(nombre, precio) {
    
    let nuevoProducto = { nombre: nombre, precio: precio };
  
    catalogo.push(nuevoProducto);
  

    console.log("Catálogo actualizado:", catalogo);
  }

let catalogo = [
    { nombre: "Tennis", precio: 150 },
    { nombre: "Bolso", precio: 500 },
    { nombre: "Reloj", precio: 300 }
  ];

agregarProducto("Gorra", 100);