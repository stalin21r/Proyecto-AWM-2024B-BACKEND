const ProductoController = require('../controllers/Producto.Controller');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = (app) => {
  app.post('/api/producto', upload.single('imagen'), ProductoController.createProducto);
  app.get('/api/productos', ProductoController.getAllProductos);
  app.get('/api/producto/:id', ProductoController.getProductoById);
  app.put('/api/producto/:id', upload.single('imagen'), ProductoController.updateProducto);
  app.delete('/api/producto/:id', ProductoController.deleteProducto);
};