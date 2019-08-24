// 1. importar express
const express = require("express");
// x1 importar libreria mongoose para conectarme a BD
const mongoose = require("mongoose");

// x2 importar la api
const api = require("./Application/Api");

// x3 imporar e inicializar dotenv
require("dotenv").config();

// x4 crear las configuraciones bd
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

// 2. crear una instancia de express llamda server
const server = express();

// 3 crear variable para el puerto
const port = 3000;

// x5 conectar la base de datos a mongoose
mongoose.connect(process.env.MONGO_URL, options);

// x6 usar middleware para interpretar json
server.use(express.json());

// x7 pasar server hacia metodo api
api(server);

// 4. crear un listener
server.listen(port, () => {
  console.log("Server start on > http://localhost:" + port);
});
