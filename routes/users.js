
const {Router} = require('express')
const {GetUsers,
    PutUsers,
    PostUsers,
    DeleteUsers} = require("../controllers/users");

const router = Router()

router.get('/', GetUsers)

router.put('/:id', PutUsers)

router.post('/', PostUsers)

router.delete('/', DeleteUsers)

module.exports = router