const Role = require("../models/role");

const isRoleValid = async (role = 'USER_ROLE') => {
    const existRole = await Role.findOne({role})
    if (!existRole) {
        throw new Error(`Role ${role} is not recognized`)
    }
}


module.exports = {
    isRoleValid
}