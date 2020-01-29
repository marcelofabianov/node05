const Post = require('./Post')
const User = require('./User')

Post.sync({ force: true })
User.sync({ force: true })
