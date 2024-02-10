const express = require("express");

const router = express.Router();

const { signUp, signin } = require("../Controllers/auth");
const { addProducts, products } = require("../Controllers/products");

router.post("/signUp", signUp);
router.post("/signin", signin);
router.post("/addProducts", addProducts);
router.get("/products", products);

module.exports = router;