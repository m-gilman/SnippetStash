var db = require("../models");

module.exports = function (app) {

  //create new snippet
  app.post("/api/snippets", function (req, res) {
    db.Snippet.create(req.body).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

  //get all public snippets
  app.get("/api/snippets", function (req, res) {
    db.Snippet.findAll({
      where: {
        public: 1
      }
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

  //return all PUBLIC snippets based on search criteria
  app.get("/api/find/public/snippets/:param", function (req, res) {
    db.Snippet.findAll({
      where: {
        snippetTitle: { $like: '%' + req.params.param + '%' },
        public: 1
      }
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });


  //delete snippet
  app.delete("/api/snippets/delete/:id", function (req, res) {
    db.Snippet.destroy({
      where: {
        id: req.params.id
      }
    })
  });

  // Get route for returning snippets of a specific category
  app.get("/api/snippets/:CategoryId", function (req, res) {
    // Add sequelize code to find all Snippets where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Snippet.findAll({
      where: {
        CategoryId: req.params.CategoryId,
        public: 1
      }
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });

  });

  //route used for member filtered view by category
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

  //route used to get member
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

