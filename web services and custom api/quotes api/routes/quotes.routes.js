const express = require("express");

const quoteController = require('../controller/quotes.controller')

const router = express.Router();

router.get("/",quoteController.getRandomQuote);

module.exports = router;
