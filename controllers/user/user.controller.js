const {userService} = require('../../service')

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();
        res.json(users)
    },

    updateUser: async (req, res) => {
        try {
            await userService.updateUser(req.body.id, req.body.name);
        }catch (e) {
            res.json(e)
        }
    },

    deleteUser: async (req, res) => {
        try {
            await userService.deleteUser(req.params.id);
        }catch (e) {
            res.json(e)
        }


        res.end()
    },

    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);
        }catch (e) {
            res.json(e)
        }



        res.end()
    }
};
