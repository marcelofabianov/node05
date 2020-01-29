const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

// Parser configs
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// View configs
app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

// Models
const User = require('./models/User')

// Rotas
app.get('/', (req, res) => res.send('Home'))

// Rota: Users / Index
app.get('/users', (req, res) => res.render('users/index'))

// Rota: Users / Create
app.get('/users/create', (req, res) => res.render('users/create'))

// Rota: Users / Store
app.post('/users', (req, res) =>
    User.create(req.body)
        .then(() => res.redirect('/users'))
        .catch(() => res.send('Error!'))
)

app.listen(3002)
