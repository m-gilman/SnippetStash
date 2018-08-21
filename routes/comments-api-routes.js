var db = require("../models");

module.exports = function (app) {

  //create new comment
  app.post("/api/comments", function (req, res) {
    console.log(req.body);
    db.Comment.create(req.body).then(function (dbComment) {
      res.json(dbComment);
      
    });
  });

  //get all comments
  app.get("/api/comments", function (req, res) {
    db.Comment.findAll({
    }).then(function (dbComment) {
      res.json(dbComment);
    });
  })

  //delete comment
  app.delete("/api/comments/delete/:id", function(req,res){
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    })
  });

};
