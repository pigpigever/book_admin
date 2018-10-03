const Mongoose = require('mongoose')
const userModel = require('./models/user')

Mongoose.connect('mongodb://localhost:27017/book', {
    useNewUrlParser: true
})

Mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

module.exports = {
	userModel
}