var bodyParser = require("body-parser");
var axios = require("axios");
var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var logger = require("morgan");

var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/public"));

var exhbs = require("express-handlebars");
app.engine("handlebars", exhbs({ defaultLayout: "man" }));
app.set("view engine", "handlebars");

mongoose.connect(
  "mongodb://localhost/articleScraper",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
var db = mongoose.connection;
db.on("error", function() {
  console.log("connected to Mongodb!");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("server running on " + port);
});
