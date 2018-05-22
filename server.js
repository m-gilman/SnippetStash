// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
// Requiring our models for syncing or user.js file
var snippet = require("./snippet");

var PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/snippet', function (req, res, next) {
  res.send('hi!')
})

// Static directory
//app.use(express.static("public"));

app.post('/snippet', function (req, res, next){
  var snippet = req.body;
  snippets.push(snippet);
  res.send('all snippets');
})

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/snippet-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
