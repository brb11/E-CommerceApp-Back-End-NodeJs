const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
    f_name: String,
    l_name: String,
    email: String,
    password: String,
    phone: Number,
    age: Number,
    country: String,
    role_id: Number
})
const User = mongoose.model('User', userSchema)

module.exports = User;