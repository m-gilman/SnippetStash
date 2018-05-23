// Use the switch statement to select one of many blocks of code to be executed.

// This is how it works:
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.


// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)
// This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
// The result of day will be:

Monday

