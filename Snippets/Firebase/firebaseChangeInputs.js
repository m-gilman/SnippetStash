 

  // Click Button changes what is stored in firebase
  $("#click-button").on("click", function() {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#name-input").val().trim();
    age = $("#age-input").val().trim();
    phone = $("#phone-input").val().trim();

    // Change what is saved in firebase
    database.ref().set({
      name: name,
      age: age,
      phone: phone
    });
  });

  // Firebase is always watching for changes to the data.
  // When changes occurs it will print them to console and html
  database.ref().on("value", function(snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().name);
    console.log(snapshot.val().age);
    console.log(snapshot.val().phone);

    // Change the HTML
    $("#displayed-data").text(snapshot.val().name + " | " + snapshot.val().age + " | " + snapshot.val().phone);

    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });