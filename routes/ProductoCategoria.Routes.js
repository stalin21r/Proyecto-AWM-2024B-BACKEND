const ProductoCtegoriaController = require('../controllers/ProductoCategoria.Controller');

module.exports = (app) => {
  app.post('/api/producto-categoria', ProductoCtegoriaController.createProductoCategoria);
  app.get('/api/producto-categorias', ProductoCtegoriaController.getProductosCategorias);
  app.get('/api/producto-categoria/:id', ProductoCtegoriaController.getProductoCategoriaById);
  app.put('/api/producto-categoria/:id', ProductoCtegoriaController.updateProductoCategoria);
  app.delete('/api/producto-categoria/:id', ProductoCtegoriaController.deleteProductoCategoria);
};