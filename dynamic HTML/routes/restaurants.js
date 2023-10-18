const express = require("express");
const uuid = require("uuid");

const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  const storedRestaurants = resData.getStoredRestaurants();

  //to render restaurants dynamic html page
  res.render("restaurants", {
    //passing keys to reataurant ejs placeholders
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  res.status(404).render("404");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});
router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.push(restaurant);
  resData.storeRestaurants(storedRestaurants);
  res.redirect("/confirm");
});

module.exports = router;
