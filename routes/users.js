
const {Router} = require('express')
const {GetUsers,
    PutUsers} = require("../controllers/users");

const router = Router()

router.get('/', GetUsers)

router.put('/', PutUsers)

module.exports = router