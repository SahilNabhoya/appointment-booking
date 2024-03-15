const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        contact: Number,
        gender: String,
        age: Number,
        role: String,
        password : String,
})

const User = mongoose.model('user',userSchema,);

module.exports = User