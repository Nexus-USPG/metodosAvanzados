function empezarConCancionDestacada(lista) {
    let cancionRemovida = lista.shift();

    console.log("Canción removida:", cancionRemovida);
    console.log("Lista de reproducción actualizada:", lista);
  }
let listaDeReproduccion = [
  { nombre: "SNAP", artista: "Artista 1" },
  { nombre: "Perfecta", artista: "Artista 2" },
  { nombre: "Sunflower", artista: "Artista 3" },
  { nombre: "I choose", artista: "Artista 4" }
];

empezarConCancionDestacada(listaDeReproduccion);