 //Get FindAll routes
 // Get all books
 app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all books from a specific author
  app.get("/api/author/:author", function(req, res) {
    Book.findAll({
      where: {
        author: req.params.author
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/authors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findAll({
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
