const express = require("express");
const { getProducts, postProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router()

router.get("/",getProducts);
router.post("/",postProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);


module.exports = router