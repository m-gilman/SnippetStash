$(document).ready(function () {

    $("#login").click(function (event) {
        event.preventDefault();
        alert('We are working on a Login feature. Please click "Enter as a guest" to view our many snippets.');
    });

    // New User Sign Up Modal Trigger
    $('#newUser').on('shown.bs.modal', function () {
    });

});