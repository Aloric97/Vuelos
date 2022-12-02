const Router = require('express').Router()
const directorController= require('../Controllers/directorController')
const fecha_hoy = require('../middlewares/fecha_hoy')
const error = require('../middlewares/errorHandler')


Router.get('/directores',fecha_hoy, directorController.findAll)
Router.get('/findOne/:nombre&:apellido', directorController.findByNombreApellido)


Router.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

module.exports =Router