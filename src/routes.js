const express = require('express');
const listUserController = require('./controllers/ListUserController');
const createUserController = require('./controllers/CreateUserController');
const updateUserController = require('./controllers/UpdateUserController');
const routes = express.Router();

routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);
routes.put('/users/:id', updateUserController.handle);
module.exports = routes;