const express = require("express");
const createProduct = require("../controllers/product/createProduct");
const getAllProducts = require("../controllers/product/getAllProducts");
const getSingleProduct = require("../controllers/product/getSingleProduct");
const updateProduct = require("../controllers/product/updateProduct");
const deleteProduct = require("../controllers/product/deleteProduct");

const authenticate = require('../middlewares/passportVerfiyToken');

const Router = express.Router();

Router.route("/").post( createProduct).get(getAllProducts);

Router.route("/:productId")
  .get(authenticate, getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = Router;
