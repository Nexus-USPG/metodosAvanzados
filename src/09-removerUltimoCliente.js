function removerUltimoCliente(cola) {
    let clienteRemovido = cola.pop();
    console.log("Cliente removido:", clienteRemovido);
    console.log("Cola de espera actualizada:", cola);
  }
  let colaDeEspera = [
    { nombre: "Jose", id: 1 },
    { nombre: "Marcela", id: 2 },
    { nombre: "Luis", id: 3 },
    { nombre: "Mario", id: 4 }
  ];

  removerUltimoCliente(colaDeEspera);