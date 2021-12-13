const Role = require("../models/role");
const User = require("../models/users");

const isRoleValid = async (role = 'USER_ROLE') => {
    const existRole = await Role.findOne({role})
    if (!existRole) {
        throw new Error(`Role ${role} is not recognized`)
    }
}

const isEmailExist = async (email = '') => {
    const emailExist = await User.findOne({email})
    if (emailExist) {
        throw new Error(`Email ${email} is registered`)
    }
}


module.exports = {
    isRoleValid,
    isEmailExist
}