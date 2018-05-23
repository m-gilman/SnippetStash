// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("chirp", {
    author: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    }
  }, {
    timestamps: false
  });
  
  // Syncs with DB
  Chirp.sync();
  
  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = Chirp;
  
  
  //Second method
  // Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
    // the routeName gets saved as a string
    routeName: Sequelize.STRING,
    // the name of the character (a string)
    name: Sequelize.STRING,
    // the character's role (a string)
    role: Sequelize.STRING,
    // the character's age (a string)
    age: Sequelize.INTEGER,
    // and the character's force points (an int)
    forcePoints: Sequelize.INTEGER
  }, {
    timestamps: false
  })