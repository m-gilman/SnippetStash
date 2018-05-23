//Post routes
var characters=[
    {
       
      }
];
// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    var newcharacter = req.body;
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });