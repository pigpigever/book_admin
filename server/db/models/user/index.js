const Mongoose = require('mongoose')
const userSchema  = require('../../schemas/user')

const userModel = Mongoose.model('user', userSchema)

module.exports = userModel