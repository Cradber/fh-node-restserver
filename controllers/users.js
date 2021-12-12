const {response} = require('express')

const GetUsers = (req, res = response) => {
    res.json({
        msg: "'Get API – Controller"
    })
}

const PostUsers = (req, res = response) => {
    const {name, age} = req.body

    res.json({
        msg: "'Put API – Controller",
        name,
        age
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