$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });


    var code = $("#snippetCode")[0];
    var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        theme: "midnight",
        mode: 'htmlmixed',
        autoCloseTags: true
    })
    // Modal with codeMirror
    $('#createSnippet').on('shown.bs.modal', function () {
        editor.refresh();
    });




    // Accordion feature with "+" and "-" icons
    $(document).ready(function () {
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function () {
            $(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function () {
            $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    });



});
