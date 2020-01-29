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
app.get('/', (req, res) => res.render('index'))
app.post('/add', (req, res) =>
    User.create(req.body)
        .then(() => res.send('Success!'))
        .catch(() => res.send('Error!'))
)

app.listen(3002)
