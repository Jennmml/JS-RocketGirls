let viajes = [];

function registrarViaje() {
  console.log("\n-*-*-*-*-*-*-*-* Registrar un nuevo viaje -*-*-*-*-*-*-*-*");
  const destino = prompt("Destino:");
  const fecha = prompt("Fecha (DD/MM/AAAA):");
  const descripcion = prompt("Descripción:");
  const viaje = { destino, fecha, descripcion };
  viajes.push(viaje);
  console.log("Viaje registrado\n");
}

function mostrarViajes() {
  console.log("\n-*-*-*-*-*-*-*-* Lista de viajes -*-*-*-*-*-*-*-*");
  if (viajes.length === 0) {
    console.log("No hay viajes registrados.\n");
  } else {
    for (let i = 0; i < viajes.length; i++) {
        console.log(`Viaje ${i + 1}:`);
        console.log(`  Destino: ${viajes[i].destino}`);
        console.log(`  Fecha: ${viajes[i].fecha}`);
        console.log(`  Descripción: ${viajes[i].descripcion}\n`);
      }
    }
    console.log();
  }

  function eliminarViaje() {
    console.log("\n--- Eliminar un viaje ---");
    if (viajes.length === 0) {
      console.log("No hay viajes para eliminar.\n");
      return;
    }
  
    mostrarViajes();
    //Investigando me di cuenta que el parseInt sirve para pasar de string a entero <3, se le
    //resta 1, para acceder bien al indice que queremos eliminar
    const index = parseInt(prompt("Ingrese el número del viaje a eliminar:")) - 1;
  
    if (viajes[index]) {
        //el indice [0] al final es para poder acceder a ese elemento eliminado,
        //para mantener la impresión y saber que fue lo que se eliminó
      const eliminado = viajes.splice(index, 1)[0];
      console.log(`El viaje a ${eliminado.destino} ha sido eliminado.\n`);
    } else {
      console.log("Número inválido. No se eliminó ningún viaje.\n");
    }
  }

function menu() {
  let opcion = "";
  do {
    console.log("-*-*-*-*-*-*-*-* Menú Principal -*-*-*-*-*-*-*-*");
    console.log("1. Registrar un viaje");
    console.log("2. Mostrar todos los viajes");
    console.log("3. Eliminar un viaje");
    console.log("4. Salir");
    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
    opcion = prompt("Seleccione una opción:");
    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")

    switch (opcion) {
      case "1":
        registrarViaje();
        break;
      case "2":
        mostrarViajes();
        break;
      case "3":
        eliminarViaje();
        break;
      case "4":
        console.log("Saliendo del programa. Chao =D");
        break;
      default:
        console.log("Opción inválida. Intente de nuevo.\n");
    }
  } while (opcion !== "4");
}

menu();