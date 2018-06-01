//Constructors
// constructor function used to create programmer objects
//inquirer a helpful way to create console apps through input
var inquirer = require("inquirer");

//When reading a new module, the first thing you need to do is find out whats being exported. In large files this isn’t always obvious, so go out of your way to make it explicit. 
//To do this, tie module.exports to the constructor at the very top of your “Public” section.
//The constructor simply defines the type while the prototype describes the behavior.
//constructor and references

//constructor that can be used to create objects with synonymous properties
function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    //print info method w/in constructor function
    this.printInfo = function(){
        console.log("Name: "+this.name)
    }
  }
  
//helpful way to create console apps through user input
  //open brackets used to create an array and curly brackets refererec objecs created within the array
inquirer.prompt([{
  name: "name",
  message:"programmer name"
}, {
  position:"position",
  message: "programmer position",
}, {
  age:"age",
  message: "programmer age",

}, {
  language: "language",
  message: "programmer language"
}])