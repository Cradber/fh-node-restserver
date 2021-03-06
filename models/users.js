
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

UsersSchema.methods.toJSON = function () {
    const {__v, password, ...user} = this.toObject()
    return user
}

module.exports = model('User', UsersSchema)
