// Index es el orquestador de las rutas (endpoints)
// para acceder a los recursos de la aplicacion

// imporar las apis
const itemApi = require("./items");

// 1. crear el metodo api que orquesta las rutas
const api = server => {
  server.use("/api/v1/items", itemApi);
};

// 2. exporar el metodo api
module.exports = api;
