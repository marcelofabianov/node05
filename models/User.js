const orm = require('./orm')

const User = orm.sequelize.define('users', {
    name: {
        type: orm.Sequelize.STRING,
    },
    email: {
        type: orm.Sequelize.STRING,
    },
    password: {
        type: orm.Sequelize.STRING,
    },
})

module.exports = User
