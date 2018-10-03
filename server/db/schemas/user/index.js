const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
	name    : String,
	password: String
})

module.exports = userSchema