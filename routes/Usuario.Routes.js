const UsuarioController = require('../controllers/Usuario.Controller');

module.exports = (app) => {
  app.post('/api/usuario', UsuarioController.createUsuario);
  app.get('/api/usuarios', UsuarioController.getUsuarios);
  app.get('/api/usuario/:id', UsuarioController.getUsuarioById);
  app.put('/api/usuario/:id', UsuarioController.updateUsuario);
  app.delete('/api/usuario/:id', UsuarioController.deleteUsuario);
}
