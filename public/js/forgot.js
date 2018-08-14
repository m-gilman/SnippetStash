$(document).ready(function () {
 // Getting references to our form and inputs
 var forgotForm = $("#forgot-form");
 var emailInput = $("#email-input");
 // When the form is submitted, we validate there's an email entered
 forgotForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
        
        email: emailInput.val().trim()
        
       
    };

   // Try to read from the file system, but move on if there"s an issue.
   if (userData.email === userData.email) {
    (function (data) {
        window.location.replace(data);
    })
} else {
    alert("Email not correct,please try again!")
    console.log(err);
}

// If we have an email we run the ForgotPassword function and clear the form
ForgotPassword(userData.email);
emailInput.val("");

});

// ForgotPassword does a post to our "api/forgot" route 
function ForgotPassword(email) {
$.post("/api/forgot", {
    email: email,
}).then(function (data) {
    window.location.replace(data);
    // If there's an error, log the error
}).catch(function (err) {
    console.log(err);
    alert("Email not correct,please try again!")
});
}



});


