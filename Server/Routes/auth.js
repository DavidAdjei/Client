const express = require("express");

const router = express.Router();

const { signUp, signin } = require("../Controllers/auth");
const { addProducts } = require("../Controllers/products");

router.post("/signUp", signUp);
router.post("/signin", signin);
router.post("/addProducts", addProducts);

module.exports = router;