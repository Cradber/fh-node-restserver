
const {Router} = require('express')
const {check} = require("express-validator");

const {GetUsers,
    PutUsers,
    PostUsers,
    DeleteUsers} = require("../controllers/users");
const {validateFields} = require("../middlewares/validateFields");
const {isRoleValid, isEmailExist} = require("../helpers/dbValidator");

const router = Router()

router.get('/', GetUsers)

router.put('/:id', PutUsers)

router.post('/', [
    check('name', 'Name required').not().isEmpty(),
    check('password', 'Password required and longer than 6 characters').isLength({min: 6}),
    check('email').custom(isEmailExist),
    check('role').custom(isRoleValid),
    validateFields
], PostUsers)

router.delete('/', DeleteUsers)

module.exports = router