
const {Router} = require('express')
const {GetUsers,
    PutUsers,
    PostUsers} = require("../controllers/users");

const router = Router()

router.get('/', GetUsers)

router.put('/', PutUsers)

router.post('/', PostUsers)

module.exports = router