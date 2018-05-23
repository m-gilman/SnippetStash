// Firebase JavaScript Link 
  //<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>

 
     // Initialize Firebase
    // This is the code we copied and pasted from our app page
    var config = {
        apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
        authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
        databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
        storageBucket: "fir-click-counter-7cdb9.appspot.com"
      };
  
      firebase.initializeApp(config);

      // Create a variable to reference the database.
      var database = firebase.database();
