;
'use strict'

const express = require('express'),
    connectDb = require('../config/db'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cors = require('cors'),
    parseurl = require('parseurl')

let app = express(),
    session = require('express-session'),
    usuarioRuta = require('../rutas/usuarios.rutas.js'),
    congresoRuta = require('../rutas/congreso.rutas'),
    ponenciaRuta = require('../rutas/ponencias.rutas'),
    fileRuta = require('../rutas/files.rutas')
    db = connectDb();
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        }
    },
    corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
    }
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//cors despues del body-parser
app.use(cors(corsOptions));
//consiguracion del session
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

//ejemplos de sessions
app.use((req, res, next) => {
    if (!req.session.views) {
        req.session.views = {};
    }
    let pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    next()
});



app.use('/api', usuarioRuta)
app.use('/api', congresoRuta)
app.use('/api', ponenciaRuta)
app.use('/api', fileRuta)

module.exports = app