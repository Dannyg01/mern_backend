const mongosee = require('mongoose');
const express = require('express')
const cors = require('cors')
const { API_VERSION } = require('./constants.js');
const bodyParser = require('body-parser');


const app = express()

//TODO Configurar carpeta static

app.use(express.static('uploads'))

// TODO Importadcion de rutas


// TODO Importadcion del body-parse

app.use(bodyParser.urlencoded({  extended: true }))
app.use(bodyParser.json())

// TODO Configurar los headers & cors

app.use(cors())

// TODO Configurar Rutas
const userRoutes = require("./routes/user.router.js")
const authRoute = require('./routes/auth.router')

//* Importar rutas

app.use(`/api/${API_VERSION}/` , authRoute)
app.use(`/api/${API_VERSION}/` , userRoutes)


module.exports = app