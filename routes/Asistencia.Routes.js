const AsistenciaController = require('../controllers/Asistencia.Controller');

module.exports = (app) => {
  app.post('/api/asistencia', AsistenciaController.createAsistencia);
  app.get('/api/asistencias', AsistenciaController.getAsistencias);
  app.get('/api/asistencia/:id', AsistenciaController.getAsistenciaById);
  app.get('/api/asistencias', AsistenciaController.getAsistenciaByUsuario);
  app.put('/api/asistencia/:id', AsistenciaController.updateAsistencia);
  app.delete('/api/asistencia/:id', AsistenciaController.deleteAsistencia);
} 