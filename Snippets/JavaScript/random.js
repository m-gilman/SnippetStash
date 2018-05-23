// Math.random() used with Math.floor() can be used to return random integers.

Math.floor(Math.random() * 10);     // returns a number between 0 and 9

Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10


// This JavaScript function always returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


// This JavaScript function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

