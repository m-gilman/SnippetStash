(document).ready(function () {
    // Getting references to our form and inputs
    var resetForm = $("#reset-form");
    var passwordInput = $("#password-input");
    var passwordConfirm = $("password-inputConfirm");
    // When the form is submitted, we validate there's an email entered
    resetForm.on("submit", function (event) {
       event.preventDefault();
       var userData = {
        password: passwordInput.val().trim(),
        confirmPassword: passwordConfirm.val().trim()
       };
   
      // Try to read from the file system, but move on if there"s an issue.
      if (userData.password === userData.confirmPassword) {
       (function (data) {
           window.location.replace(data);
       })
   } else {
       alert("Password not correct,please try again!")
       console.log(err);
   }
   
   // If we have an email we run the ForgotPassword function and clear the form
   ResetPassword(passwordInput, passwordConfirm);
   passwordInput.val("");
   passwordConfirm.val("");
   
   });
   
   // ResetPassword does a post to our "api/reset" route 
   function ResetPassword(email) {
   $.post("/api/reset", {
       email: email,
   }).then(function (data) {
       window.location.replace(data);
       // If there's an error, log the error
   }).catch(function (err) {
       console.log(err);
       alert("Passwords do not match,please try again!")
   });
   }
   
   
   
   });
   