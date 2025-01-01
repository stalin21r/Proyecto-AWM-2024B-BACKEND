const TurnoController = require('../controllers/Turno.Controller');

module.exports = (app) => {
  app.post('/api/turno', TurnoController.createTurno);
  app.get('/api/turnos', TurnoController.getTurnos);
  app.get('/api/turno/:id', TurnoController.getTurnoById);
  app.put('/api/turno/:id', TurnoController.updateTurno);
  app.delete('/api/turno/:id', TurnoController.deleteTurno);
};