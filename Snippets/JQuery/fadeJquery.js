// With jQuery you can fade elements in and out of visibility.

// jQuery has the following fade methods:

// fadeIn()
// fadeOut()
// fadeToggle()
// fadeTo()

$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});