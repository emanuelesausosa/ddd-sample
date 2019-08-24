// 1. Crear una clase que agrupe todas las funciones (handlers)
class itemHandler {
  // 1. traer una lista de items
  static async list() {
    const items = await this.find();
    return { items };
  }

  // 2. agregar un item a la base de datos
  static async add(descripcion, categoria, tipo) {
    const result = await this.create({ descripcion, categoria, tipo });
    return result;
  }

  // 3. editar un item de la base de datos
  static async edit(id, descripcion, categoria, tipo) {
    const itemTemp = await this.findById(id);
    if (!itemTemp) throw new Error("No se encontro ningun item");

    // a. crear un DTO (objeto intermediario)
    const itemModified = {
      descripcion,
      categoria,
      tipo
    };

    // b. realizar la operacion de update
    const result = await this.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: itemModified
      }
    );

    return result;
  }
}

// 2.  hacer publica la clase handler
module.exports = itemHandler;
