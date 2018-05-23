//Post Create Router
// Add a book
app.post("/api/new", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    });
  });