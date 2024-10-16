const { random, underline } = require("colors");
const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===========================".green);
    console.log("  Seleccione una opción: ".blue);
    console.log("===========================\n".green);

    console.log(`${"1.".green} ${"Crear tarea".yellow}`);
    console.log(`${"2.".green} ${"Listar tareas".yellow}`);
    console.log(`${"3.".green} ${"Listar tareas completadas".yellow}`);
    console.log(`${"4.".green} ${"Listar tareas pendientes".yellow}`);
    console.log(`${"5.".green} ${"Completar tarea(s)".yellow}`);
    console.log(`${"6.".green} ${"Borrar tarea".yellow}`);
    console.log(`${"0.".green} ${"Salir".underline.red} \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (opt) => {
      resolve(opt);
      readline.close();
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".yellow} para continuar\n`, () => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
