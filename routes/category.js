const express =  require('express');
const createCategory = require('../controllers/category/createCategory');
const updateCategory = require('../controllers/category/updateCategory');
const deleteCategory = require('../controllers/category/deleteCategory');
const getAllCategory = require('../controllers/category/getAllCategory');

const Router = express.Router();


Router.route('/').post(createCategory).get(getAllCategory);


Router.route('/:categoryId').patch(updateCategory).delete(deleteCategory);




module.exports = Router;