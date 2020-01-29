const orm = require('./orm')

const Post = orm.sequelize.define('posts', {
    title: {
        type: orm.Sequelize.STRING,
    },
    body: {
        type: orm.Sequelize.TEXT,
    },
})

module.exports = Post
