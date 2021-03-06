const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers')


userRouter.post('/', userController.createUser);

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:id', userController.getUser);

userRouter.put('/', userController.updateUser);

userRouter.delete('/:id', userController.deleteUser);


module.exports = userRouter;
