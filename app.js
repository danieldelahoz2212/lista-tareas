const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveFile");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listadoPendientesCompletadas(true);
        break;
      case "4":
        tareas.listadoPendientesCompletadas(false);
        break;
      case "5":
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== 0) {
          const ok = await confirmar("Esta seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada con exito");
          }
        }
        break;
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
