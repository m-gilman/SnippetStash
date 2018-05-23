// In JavaScript there are two types of scope:
// Local scope
// Global scope
// JavaScript has function scope: Each function creates a new scope.
// Scope determines the accessibility (visibility) of these variables.
// Variables defined inside a function are not accessible (visible) from outside the function.

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.


// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables have local scope: They can only be accessed within the function.

// code here can not use carName
function myFunction() {
    var carName = "Volvo";
    // code here can use carName

}


// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();
// code here can use carName 
function myFunction() {
    carName = "Volvo";
}



// With JavaScript, the global scope is the complete JavaScript environment.
// In HTML, the global scope is the window object. All global variables belong to the window object.

var carName = "Volvo";

// code here can use window.carName
 