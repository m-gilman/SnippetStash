$(document).ready(function () {
    var nameInput = $("#user-username");
    var pwInput = $("#user-password");
    var usrForm = $("#user-form");

    $(usrForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a name or a password
        if (!nameInput.val().trim() || !pwInput.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newUser = {
            username: nameInput.val().trim(),
            password: pwInput.val().trim()
        };

        insertUser(newUser);

    });

    function insertUser(User) {
        $.post("/api/users", User, function () {
            window.location.href = "/api/users";
        });
    };

});//end document.ready function