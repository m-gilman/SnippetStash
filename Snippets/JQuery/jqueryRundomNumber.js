//Here we have div called "randomNumber" where our random number will go 
//<h1 class="text-center" id="random-number"></h1>


$(document).ready(function() {

    // Notice I didn't set $(".jumbotron") to a var this time?
    // If you only plan to use that selector once it doesn't need to be a var
    $(".jumbotron").on("click", "#random-button", function() {

      // ... we generate a random number from 1 to 1000
      var random = Math.floor(Math.random() * 1000) + 1;

      // ... and then dump the random number into our random-number div.
      $("#random-number").text(random);

    });

  });
