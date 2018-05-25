$(document).ready(function () {
    
    getAllSnippets();
    var titleInput = $("#SnippetTitle");
    var contentInput = $("#snippetCode");
    var stashForm = $("#stash-form");
    var catId = $("#snippetCategory");
    var usrName = $("#user");

    $(stashForm).on("submit", function handleFormSubmit(event) {
        alert("Button was pressed");
        event.preventDefault();
        // Wont submit the post if we are missing a name or a password
        if (!titleInput.val().trim() || !contentInput.val().trim()) {
            console.log("Form Fields need to be completed!!!")
            console.log("Title Input: " +titleInput.val().trim() );
            console.log("Snippet Code: " + contentInput.val().trim() );
            return;
        }
        // Constructing a newPost object to hand to the database
        var newSnippet = {
            snippetTitle: titleInput.val().trim(),
            snippetContent: contentInput.val().trim(),
            CategoryId: catId.val(),
            UserId: usrName.val()
        };

        insertSnippet(newSnippet);

    });

    function insertSnippet(newSnippet) {
        $.post("/api/snippets", newSnippet, function () {
            window.location.href = "/api/snippets";
        });
    };

    function getAllSnippets() {
        $.get("/api/snippets", function (data) {
            var itemToAdd = [];
            for (var i = 0; i < data.length; i++) {
                itemToAdd.push(renderSnippets(data[i]));
            }
        });
    }

    function renderSnippets(itemToAdd) {
        // var newLi = $("<h4>").appendTo('#accordion');
        // newLi.data("snippet", itemToAdd);
        // newLi.append("<a href='/'><i class='fa  fa-fw'></i>" + itemToAdd.snippetTitle + "<span></span> </a>");
        // return newLi;
        var newPanelHeading = $('<div class="panel panel-default">').appendTo('#append-to-me');
        newPanelHeading.append("<h4 class='panel-title'> <a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'>" + itemToAdd.snippetTitle+"</a></h4> </br>");
        newPanelHeading.append("<h4 class='panel-title'> <a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'>" + itemToAdd.snippetContent+"</a></h4> </br>");
        return newPanelHeading;


    }

});//end document.ready function

