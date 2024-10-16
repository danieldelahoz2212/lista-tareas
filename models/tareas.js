const fs = require("fs");
const file = "./db/data.json";
const Tarea = require("./tarea");

class Tareas {
  _list = {};

  get listadoArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const tarea = this._list[key];
      list.push(tarea);
    });
    return list;
  }

  constructor() {
    this._list = {};
  }

  borrarTarea(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._list[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    if (desc.trim()) {
      const tarea = new Tarea(desc);
      this._list[tarea.id] = tarea;
    }
    return;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach((entrada, i) => {
      const idx = `${i + 1}.`.green;
      const { desc, completadoEn } = entrada;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listadoPendientesCompletadas(completadas = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((entrada) => {
      const { desc, completadoEn } = entrada;

      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      if (completadas) {
        if (completadoEn) {
          contador += 1;
          console.log(
            `${(contador + ".").green} ${desc} :: ${completadoEn.green}`
          );
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._list[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._list[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
