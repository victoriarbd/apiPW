const express = require("express");
const Router = express.Router();
const db = require("../connection");
const userCtrl = require('../controllers/user')
const auth = require("../middleware/auth");

Router.post('/signup', userCtrl.signUp);
Router.post('/login', userCtrl.login);
Router.get('/', userCtrl.getAllUser);
Router.post('/', userCtrl.insertUser);
Router.put('/', auth, userCtrl.putUser);
Router.delete('/:iduser', auth, userCtrl.deleteUser)
Router.get('/:iduser', userCtrl.getById)


module.exports = Router;