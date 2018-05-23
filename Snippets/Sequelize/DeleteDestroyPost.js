//Post Delete Destroy
// Delete a book
app.post("/api/delete", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    Book.destroy({
      where: {
        id: req.body.id
      }
    });
  });
  
//Or

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });