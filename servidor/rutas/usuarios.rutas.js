;
'use strict'
const express = require('express'),
    multiParty = require('connect-multiparty'),
    passwordcontrol = require('../auntentica/password'),
    autenticacioncontrol = require('../auntentica/autenticacion');
let api = express.Router(),
    usuarioControl = require('../controller/usuarios.controller'),
    galeriaMiddLeware = multiParty({ uploadDir: './files/galeria' }),
    midlewareDate = require('../middleware/middleware');
    // rolControl = require('../auntentica/rol');

api.get('/get_usuarios', midlewareDate, usuarioControl.getUsuario)

api.post('/insert_usuario', usuarioControl.insertOne)
api.put('/update/:id', autenticacioncontrol.autentificar, usuarioControl.updateOne)
api.get('/usuario/:id', autenticacioncontrol.autentificar, usuarioControl.get_usuario_one)
api.delete('/delete_all', autenticacioncontrol.autentificar, usuarioControl.deleteMany)
api.delete('/usuario_delete/:id', autenticacioncontrol.autentificar, usuarioControl.deleteOne)

api.post('/insertusuario', [passwordcontrol.codificar], usuarioControl.nuevoUsuario)
api.post('/login', usuarioControl.login)
module.exports = api