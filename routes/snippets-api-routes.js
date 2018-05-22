var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the snippets
  app.get("/api/snippets", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Snippet.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbSnippet) {
      res.json(dbSnippet);
    });
  });

  // Get route for retrieving a single snippet
  app.get("/api/snippets/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Snippet.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Snippet]
    }).then(function(dbSnippet) {
      res.json(dbSnippet);
    });
  });

  // POST route for saving a new snippet
  app.post("/api/snippets", function(req, res) {
    db.Snippet.create(req.body).then(function(dbSnippet) {
      res.json(dbSnippet);
    });
  });

  // DELETE route for deleting snippets
  app.delete("/api/snippets/:id", function(req, res) {
    db.Snippet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSnippet) {
      res.json(dbSnippet);
    });
  });

  // PUT route for updating snippets
  app.put("/api/snippets", function(req, res) {
    db.Snippet.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbSnippet) {
      res.json(dbSnippet);
    });
  });
};
 


