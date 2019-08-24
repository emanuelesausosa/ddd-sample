// segmento de endpoints para items
// 1. importar express
const express = require("express");

// 2. obtener metodo Route() de express, manejar rutas
const router = express.Router();

// 3. llamar a Item de Domain/models
const Item = require("../Domain/Models/Item");

// 4. crear endpoints o rutas
/**
 * GET: Obtiene la lista de todas los items
 */
router.get("/", async (req, res) => {
  const items = await Item.list();
  res.status(200).json(items);
});

/**
 * POST: guarda un item en la BD
 * params: descripcion, categoria, tipo
 */
router.post("/add", async (req, res) => {
  const result = await Item.add(
    req.body.descripcion,
    req.body.categoria,
    req.body.tipo
  );

  res.status(200).json(result);
});

// 5. exportar router
module.exports = router;
