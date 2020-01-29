const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
//const Sequelize = require('sequelize')
//const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express')

const app = express()

// Parser configs
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// View configs
app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

// Rotas
app.get('/', (req, res) => res.render('index'))
app.post('/add', (req, res) => res.send(req.body))

app.listen(3002)
