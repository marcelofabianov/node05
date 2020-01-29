const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express')

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}
