const {request, response} = require('express')

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

const PostUsers = (req, res = response) => {
    const {name, age} = req.body

    res.json({
        msg: "'Post API – Controller",
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