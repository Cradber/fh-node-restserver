
const {Router} = require('express')
const {check} = require("express-validator");

const Role = require('../models/role')

const {GetUsers,
    PutUsers,
    PostUsers,
    DeleteUsers} = require("../controllers/users");
const {validateFields} = require("../middlewares/validateFields");

const router = Router()

router.get('/', GetUsers)

router.put('/:id', PutUsers)

router.post('/', [
    check('name', 'Name required').not().isEmpty(),
    check('password', 'Password required and longer than 6 characters').isLength({min: 6}),
    check('email', 'Invalid email').isEmail(),
    // check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(async (role = 'USER_ROLE') => {
        const existRole = await Role.findOne({role})
        if (!existRole) {
            throw new Error(`Role ${role} is not recognized`)
        }
    }),
    validateFields
], PostUsers)

router.delete('/', DeleteUsers)

module.exports = router