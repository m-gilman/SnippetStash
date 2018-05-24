var db = require("../models");

module.exports = function(app) {
  //get all snippets
  app.get("/api/snippets", function (req, res) {
    db.Snippet.findAll({
    }).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

  //create new snippet
  app.post("/api/snippets", function (req, res) {
    db.Snippet.create(req.body).then(function (dbSnippet) {
      res.json(dbSnippet);
    });
  });

};
