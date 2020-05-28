const db = require('../dataBase').getInstance();


module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User')
        return  UserModel.findAll({})

    },

    createUser: (user) => {
        const UserModel = db.getModel('User')
        return  UserModel.create(user)

    },

    deleteUser: (id) => {
        const UserModel = db.getModel('User')
        return UserModel.destroy({
            where: {
                id: id
            }
        })
    },

    updateUser: (id, name) => {
        const UserModel = db.getModel('User')
        return UserModel.update({
            name: name
        },{
            where: {
                id: id
            }
        })

    }
}
