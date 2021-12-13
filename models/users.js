
const {Schema, model} = require('mongoose')

const UsersSchema = Schema({
    name: {
        type: String,
        required: [true, 'It needed the name']
    },
    email: {
        type: String,
        required: [true, 'It needed the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'It needed the password']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

module.exports = model('User', UsersSchema)
