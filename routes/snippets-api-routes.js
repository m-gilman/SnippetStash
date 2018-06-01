var db = require("../models");

module.exports = function (app) {

  //create new snippet
  app.post("/api/snippets", function (req, res) {
    db.Snippet.create(req.body).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

  //get all snippets
  app.get("/api/snippets", function (req, res) {
    db.Snippet.findAll({
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

  // Get route for returning snippets of a specific category
  app.get("/api/snippets/:CategoryId", function (req, res) {
    // Add sequelize code to find all Snippets where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Snippet.findAll({
      where: {
        CategoryId: req.params.CategoryId
      }
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });

  });

  // app.get("/api/snippets/:CategoryId/:Uid", function(req, res) {
  //   // Add sequelize code to find all Snippets where the category is equal to req.params.category,
  //   // return the result to the user with res.json
  //   db.Snippet.findAll({where: {
  //     CategoryId: req.params.CategoryId,
  //     UserId:  req.params.Uid
  //   }}).then(function (dbSnippet){
  //     res.json(dbSnippet);
  //   });

  //should update to this:
  app.get("/api/user/snippets/:CategoryId/", function (req, res) {

    // Add sequelize code to find all Snippets where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Snippet.findAll({
      where: {
        CategoryId: req.params.CategoryId,
        UserId: req.user.id
      }
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

  app.get("/api/user/", function (req, res) {

    // Add sequelize code to find all Snippets where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Snippet.findOne({
      where: {
        UserId: req.user.id
      }
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });


};

