//first write build-in packages require
const path = require("path");

//then write third party packages require
const express = require("express");

//then write user-defined packages require
const defaultRoutes = require("./routes/default");
const restaurantsRoutes = require("./routes/restaurants");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ exteneded: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantsRoutes);

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
