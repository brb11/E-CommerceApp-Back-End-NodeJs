const mongoose = require('mongoose')
const schema = mongoose.Schema;

const roleSchema = new schema({
    name: String
})
const Role = mongoose.model('Role', roleSchema)

module.exports = Role;