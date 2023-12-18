const express = require("express");

const router = express.Router();

router.get("/products", function (res, req) {
  res.render("customer/products/all-products");
});

module.exports = router;
