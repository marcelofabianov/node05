const express = require('express')
const hbs = require('express-handlebars')
const Sequelize = require('sequelize')

const app = express()
const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express')

// View configs
app.engine(
    'handlebars',
    hbs({
        extname: 'hbs',
        defaultLayout: 'default',
        layoutsDir: __dirname + '/views/pages/',
        partialsDir: __dirname + '/views/partials',
    })
)

app.set('view engine', 'handlebars')

// Rotas
app.get('/', (req, res) => res.render('index', { nome: 'Marcelo Fabiano' }))

app.listen(3002, () => console.log('Nodemon...'))
