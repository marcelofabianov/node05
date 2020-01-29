const express = require('express')
const hbs = require('express-handlebars')
//const Sequelize = require('sequelize')
//const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express')

const app = express()

// View configs
app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

// Rotas
app.get('/', (req, res) => res.render('index'))

app.listen(3002)
