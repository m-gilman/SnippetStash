// HTML Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/view.html"));
    });
  
    // add route loads the add.html page, where users can enter new books to the db
    app.get("/add", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/add.html"));
    })
};