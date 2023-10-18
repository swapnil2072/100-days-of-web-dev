const fs = require("fs");

const path = require("path");

const express = require("express");

const uuid = require("uuid");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ exteneded: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/restaurants", function (req, res) {
  const storedRestaurants = getStoredRestaurants();

  //to render restaurants dynamic html page
  res.render("restaurants", {
    //passing keys to reataurant ejs placeholders
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const storedRestaurants = getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  res.status(404).render("404");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});
app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const storedRestaurants = getStoredRestaurants();

  storedRestaurants.push(restaurant);
  storeRestaurants(storedRestaurants);
  res.redirect("/confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

//this middlware will kick in when no other routes handle the requests
app.use(function (req, res) {
  res.status(404).render("404");
});
// this middleware is used to handle server side errors (500 status code) and
// error parameter will be populated by express only
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
