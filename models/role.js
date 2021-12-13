
const {Schema, model} = require('mongoose')

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'Role needed']
    }
})

module.exports = model('Role', RoleSchema)