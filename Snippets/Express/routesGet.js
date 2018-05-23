// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/tables", function(req, res) {
      res.json(tableData);
    });

    
    // Routes Get
    app.get("/", function(req, res) {
        res.send("Welcome to the Star Wars Page!");
    });
    
    // Displays all characters
    app.get("/api/characters", function(req, res) {
        return res.json(characters);
    });
    
};