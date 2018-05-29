$(document).ready(function () {

    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };


        // Try to read from the file system, but move on if there"s an issue.
        if (userData.email === userData.email & userData.password === userData.password) {
            (function (data) {
                window.location.replace(data);
            })
        } else {
            alert("Email or Password not correct,please try again!")
            console.log(err);
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function (err) {
            console.log(err);
            alert("Email or Password not correct,please try again!")
        });
    }


    //   // Getting references to our form and input
    //   var signUpForm = $("form.signup");
    //   var emailInput = $("input#email-input");
    //   var passwordInput = $("input#password-input");

    //   // When the signup button is clicked, we validate the email and password are not blank
    //   signUpForm.on("submit", function (event) {
    //       event.preventDefault();
    //       var userData = {
    //           email: emailInput.val().trim(),
    //           password: passwordInput.val().trim()
    //       };

    //       if (!userData.email || !userData.password) {
    //           return   alert("Please fill all of the fields!")
    //                   console.log(err);
    //       // }
    //       // else if(userData.email === userData.email & userData.password === userData.password){
    //       //     return   alert("You can not sign up with this email and password, it is already exist, try different email again, or log in!")
    //       }
    //       // If we have an email and password, run the signUpUser function
    //       signUpUser(userData.email, userData.password);
    //       emailInput.val("");
    //       passwordInput.val("");
    //   });

    //   // Does a post to the signup route. If successful, we are redirected to the members page
    //   // Otherwise we log any errors
    //   function signUpUser(email, password) {
    //       $.post("/api/signup", {
    //           email: email,
    //           password: password
    //       }).then(function (data) {
    //           window.location.replace(data);
    //           // If there's an error, handle it by throwing up a bootstrap alert
    //       }).catch(handleLoginErr);
    //       // alert("Please fill all of the fields!")
    //   }

    //   function handleLoginErr(err) {
    //       $("#alert .msg").text(err.responseJSON);
    //       $("#alert").fadeIn(500);
    //   }
});

