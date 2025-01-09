const express =  require('express');
const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');
const Router = express.Router();


Router.route('/register').post(register);
Router.route('/login').post(login);




module.exports = Router ;