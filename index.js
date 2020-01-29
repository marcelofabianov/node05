const express = require('express')
const hbs = require('handlebars')
const Sequelize = require('sequelize')

const app = express()
const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express')

app.engine(
    'handlebars',
    hbs({
        extname: 'hbs',
        defaultLayout: 'default',
    })
)

app.listen(3002, () => console.log('Nodemon'))
