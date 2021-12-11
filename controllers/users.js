const {response} = require('express')

const GetUsers = (req, res = response) => {
    res.json({
        msg: "'Get API – Controller"
    })
}

const PostUsers = (req, res = response) => {
    res.json({
        msg: "'Put API – Controller"
    })
}

const PutUsers = (req, res = response) => {
    res.json({
        msg: "'Post API – Controller"
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