const Router = require('express').Router()
const directorController= require('../Controllers/directorController')
const fecha_hoy = require('../middlewares/fecha_hoy')


Router.get('/find',fecha_hoy, directorController.findAll)
Router.get('/findOne/:nombre&:apellido', directorController.findByNombreApellido)


module.exports =Router