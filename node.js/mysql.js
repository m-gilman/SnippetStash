//must use mysql database system
// Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS music_db;
// Creates the "animals_db" database --
CREATE DATABASE music_db;
// Makes it so all of the following code will affect music_db --
USE music_db;

// Creates the table "people" within music_db --
CREATE TABLE people (
// Makes a string column called "name" which cannot contain null --
artist VARCHAR(30) NOT NULL,
// song title
Makes a string column called "song_title" --
song_title VARCHAR(30),
 //Makes an numeric column called "release date" --
release_date INTEGER(10)
);



//install npm mysql and require it the dependency
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "music_db"
});
//connectivity
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
  });
  