var db = require("../models");

module.exports = function(app) {
    //get all users
    app.get("/api/users", function(req, res) {
        db.User.findAll({
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });

};
