const {request, response} = require('express')
const bcryptjs = require('bcryptjs')

const User = require('../models/users')

const GetUsers = (req = request, res = response) => {
    const {q,
        name = 'No name',
        apikey,
        page = 1,
        limit = 10} = req.query

    res.json({
        msg: "'Get API – Controller",
        q,
        name,
        apikey,
        page,
        limit
    })
}

const PostUsers = async (req, res = response) => {

    const {name, email, password, role} = req.body
    const user = new User({name, email, password, role})

    // Verify the email existed
    const emailExist = await User.findOne({email})
    if (emailExist) {
        return res.status(400).json({
            error: 'The email is registered'
        })
    }

    // Encrypt the password
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    // Save DB
    await user.save()

    res.json({
        msg: "'Post API – Controller",
        user
    })
}

const PutUsers = (req, res = response) => {
    const {id} = req.params

    res.json({
        msg: "'Pu API – Controller",
        id
    })
}

const DeleteUsers = (req, res = response) => {
    res.json({
        msg: "'Delete API – Controller"
    })
}

module.exports = {
    GetUsers,
    PostUsers,
    PutUsers,
    DeleteUsers
}