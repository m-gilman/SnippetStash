// Objects are variables too. But objects can contain many values.

var person = {
  firstName: "Bob",
  lastName : "Smith",
  id       : 5566,
  fullName : function() {
      return this.firstName + " " + this.lastName;
},
};

// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.




