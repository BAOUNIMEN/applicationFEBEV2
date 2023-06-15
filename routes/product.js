const express = require("express");
const {
  addProducts,
  getProducts,
  getOneProduct,
  deleteProducts,
  editProducts,
} = require("../controllers/product.controller");

const isAuth = require("../middleware/verifAuth");
const roleValidation = require("../middleware/role");

const router = express.Router();
router.post("/add_products"
// , isAuth, roleValidation(["admin"])
, addProducts);
router.get("/get_products", getProducts);
router.get("/get_products/:id", getOneProduct);
router.delete("/delete_products/:id"
// ,isAuth,
// roleValidation(["admin"])
,deleteProducts);
router.put('/edit_products/:id'
// isAuth,roleValidation(['admin'])
,editProducts);
  
module.exports = router;
