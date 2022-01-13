const express = require('express');
const listUserController = require('./controllers/ListUserController');
const createUserController = require('./controllers/CreateUserController');
const updateUserController = require('./controllers/UpdateUserController');
const deleteUserController = require('./controllers/DeleteUserController');
const indexProjectController = require('./controllers/IndexProjectController');
const routes = express.Router();

routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);
routes.put('/users/:id', updateUserController.handle);
routes.delete('/users/:id', function (req, res) { deleteUserController.handle });
routes.get('/projects', indexProjectController.handle);
module.exports = routes;