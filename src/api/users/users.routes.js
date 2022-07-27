const UserRoutes = require('express').Router();
const { postNewUser, loginUser, logoutUser, getUser, patchUser, deleteUser, getUsers } = require('./users.controller');
const { isAuth } = require("../../middlewares/auth");

UserRoutes.post('/', postNewUser);
UserRoutes.post('/login', loginUser);
UserRoutes.post('/logout', logoutUser);
UserRoutes.get('/', getUsers);
UserRoutes.get('/:id', getUser);
UserRoutes.patch('/:id', patchUser);
UserRoutes.delete('/:id', deleteUser);

module.exports = UserRoutes;