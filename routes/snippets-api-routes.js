var db = require("../models");

module.exports = function(app) {

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
   app.get("/api/snippets/:CategoryId", function(req, res) {
    // Add sequelize code to find all Snippets where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Snippet.findAll({where: {
      CategoryId: req.params.CategoryId
    }}).then(function (dbSnippet){
      res.json(dbSnippet);
    });

  });
  

};

/*
  app.get("/api/authors/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

*/