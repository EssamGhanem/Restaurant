const express =  require('express');
const createCart = require('../controllers/cart/createCart');
const getUserCart = require('../controllers/cart/getUserCart');
const updateCart = require('../controllers/cart/updateCart');
const removeProductFromCart = require('../controllers/cart/removeProductFromCart');
const checkout = require('../controllers/cart/checkout');
const Router = express.Router();



Router.route('/').post(createCart)

Router.route('/userCart/:userId').get(getUserCart).delete(checkout);

Router.route('/:cartItemId').patch(updateCart).delete(removeProductFromCart)





module.exports = Router;