$(document).ready(function () {

    // Modal with codeMirror
    $('#createSnippet').on('shown.bs.modal', function () {
        var code = $("#snippetCode")[0];
        var editor = CodeMirror.fromTextArea(code, {
            lineNumbers: true,
            theme: "midnight"
        })
    });


});