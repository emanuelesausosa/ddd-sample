// 1. importar librerias (mongoose)
const mongoose = require("mongoose");
const itemHandler = require("../Handlers/itemHandler");
// 2. obtener objeto Schema desde mongoose
const { Schema } = mongoose;

// 3. crear un esquema tipo monogoSchema
const monogoSchema = new Schema({
  descripcion: {
    type: String,
    minlength: 10,
    required: true
  },
  categoria: String,
  tipo: String
});

// x.1 conectar el handler con el modelo
monogoSchema.loadClass(itemHandler);

// 4. linkear (conectar) el mongo esquma con un modelo (document) de MongoDB
const Item = mongoose.model("items", monogoSchema);

// 5. Exportar el component Item
module.exports = Item;
