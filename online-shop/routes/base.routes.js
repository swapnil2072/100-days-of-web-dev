const express = require("express");

const router = express.Router();

router.get("/", function (res, req) {
  res.redirect('/products')
});

module.exports = router;
