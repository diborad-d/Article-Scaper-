var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
  // Get all Articles
  app.get("/api/Articles", function(req, res) {
    db.Articles.findAll({}).then(function(dbArticles) {
      res.json(dbArticle);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
  // Create a new Article
  app.post("/api/Articles", function(req, res) {
    db.Article.create(req.body).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
  // Delete an Article by id
  app.delete("/api/Articles/:id", function(req, res) {
    db.Article.destroy({ where: { id: req.params.id } }).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });
};
