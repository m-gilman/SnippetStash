// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  //get all categories
  app.get("/api/categories", function (req, res) {
    db.Category.findAll({
    }).then(function (dbCategory) {
      res.json(dbCategory);
    });
  });

  //get one category by id
  app.get("/api/categories/:CategoryId", function(req, res) {
    // Add sequelize code to find all Snippets where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Category.findOne({where: {
      id: req.params.CategoryId
    }}).then(function (dbCategory){
      res.json(dbCategory);
    });

  });

};
