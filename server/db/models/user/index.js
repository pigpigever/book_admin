const Mongoose = require('mongoose')
const userSchema  = require('../../schemas/user')

const userModel = Mongoose.model('users', userSchema)

module.exports = userModel