// Created an empty HTML div. Note that there is no content 
<div id="empty-div"></div>

 // Here we are using jQuery's .HTML method to instantly select and change the contents of our empty-div.
 $("#empty-div").html("<h1>Hello friends!</h1>");

  // jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);

 // We can just as easily append a new line using a similarly simple .append method.
 $("#empty-div").append("A pleasure to meet you!");


   // jQuery alternative to: var newDiv = document.createElement("div");

   // If we needed each line to be its own div, we could just as easily create a new div.
   var newDiv = $("<div>");

   // jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";
   
   newDiv.text("A pleasure to meet you!");

   // We can then  append it to the other div using the same ".append" method.
   $("#empty-div").append(newDiv);
