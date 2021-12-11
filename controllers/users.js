const {response} = require('express')

const GetUsers = (req, res = response) => {
    res.json({
        msg: "'Get API – Controller"
    })
}

module.exports = {
    GetUsers
}