const ProductoCategoria = require('../models/ProductoCategoria.Model');

// Crear ProductoCategoria
exports.createProductoCategoria = async (req, res) => {
  try {
    const productoCategoria = await ProductoCategoria.create(req.body);
    res.status(201).json({ message: 'Categoria creada correctamente.', productoCategoria });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al crear Categoria.', error: error.message });
  }
};

// Obtener todas las categorias
exports.getProductosCategorias = async (req, res) => {
  try {
    const productosCategorias = await ProductoCategoria.findAll();
    if (productosCategorias.length === 0) {
      return res
        .status(404)
        .json({ message: 'No se encontraron categorias.', error: '404 Not Found' });
    }
    res
      .status(200)
      .json({ message: 'Categorias obtenidas correctamente.', productosCategorias });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener categorias.', error: error.message });
  }
}