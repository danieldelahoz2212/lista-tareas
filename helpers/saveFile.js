const fs = require("fs");
const file = "./db/data.json";

const guardarDB = (data) => {
  if (data && typeof data === "object") {
    fs.writeFileSync(file, JSON.stringify(data));
  } else {
    console.error("Los datos proporcionados no son válidos.");
  }
};

const leerDB = () => {
  if (!fs.existsSync(file)) {
    return [];
  }

  const info = fs.readFileSync(file, { encoding: "utf-8" });
  const data = JSON.parse(info);
  return data;
};

module.exports = { guardarDB, leerDB };
