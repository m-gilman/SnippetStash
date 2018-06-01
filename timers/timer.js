//timers

//setTimeout accepts a reference to a function as the first argument.
//This can be the name of a function:
function explode(){
    alert("Boom!");
  }
  setTimeout(explode, 2000);

//clear timer function
var timer = setTimeout(myFunction, 3000);
clearTimeout(timer);