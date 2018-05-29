$(document).ready(function () {

    var url = window.location.search;
    var dir = window.location.pathname;
    if (url.indexOf("?catId=") !== -1) {
        catId = url.split("=")[1];    
        getAllSnippetsByCategory(catId);
      }
    else{
        //displays first category snippets as default view
        catId = 1;
        getAllSnippetsByCategory(catId);
    }
        
    var stashForm = $("#stash-form");
    var titleInput = $("#SnippetTitle");
    var contentInput = $("#snippetCode");
    var descriptionInput = $("#snippetDescription");
    var usrName = $(".member-id");
    var catId = $("#snippetCategory");
    var header = $("#snippetHdr");
    
    


    $(stashForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing title, content, or username
        if (!titleInput.val().trim() || !contentInput.val().trim() || !usrName.text()) {
            console.log("Form Fields need to be completed!!!")
            console.log("Title Input: " + titleInput.val().trim());
            console.log("Snippet Code: " + contentInput.val().trim());
            console.log("Member Email: " + usrName.text());
            return;
        }
        // Constructing a newPost object to hand to the database
        var newSnippet = {
            snippetTitle: titleInput.val().trim(),
            snippetContent: contentInput.val().trim(),
            snippetDescription: descriptionInput.val().trim(),
            CategoryId: catId.val(),
            UserId: usrName.text()
        };

        insertSnippet(newSnippet);

    });

    function insertSnippet(newSnippet) {
        // console.log("Title Input: " + titleInput.val().trim());
        // console.log("Snippet Code: " + contentInput.val().trim());
        // console.log("Member Email: " + usrName.text());
        $.post("/api/snippets", newSnippet, function () {
            window.location.href = dir +"?catId=" + catId.val();
        });
    };

    function getAllSnippetsByCategory(id) {
        $.get("/api/snippets/" +id, function (data) {
            var itemToAdd = [];
            for (var i = 0; i < data.length; i++) {
                itemToAdd.push(renderSnippets(data[i]));
            }
            getCatName(id);
        });
    }

    function getCatName(id){
        $.get("/api/categories/" +id, function (data) {
            console.log(data.catName);
            header.append(data.catName + " Snippets");
        });
    }

    function renderSnippets(itemToAdd) {
        var newPanelHeading = $('<div class="panel panel-default">').appendTo('#append-to-me');
        newPanelHeading.append("<div class='col-lg-11 col-lg-12' ><div class='panel-group' id='accordion" + itemToAdd.id + "'><div class='panel panel-default'><div class='panel panel-primary'><div class='panel-heading'><div class='row'><div class='col-xs-3'> <a href='' type='small-link' aria-label='Left Align'> <span class='glyphicon glyphicon-trash' id='deleteSnippet' aria-hidden='true'></span> </a></div><div class='col-xs-9 text-right'><div class='huge'>" + itemToAdd.snippetTitle + "</div><div>" + itemToAdd.snippetDescription + "</div></div></div></div> <a href='#'><div class='snippetDetails' ><div class='panel-group' id='accordion" + itemToAdd.id + "'><div class='panel panel-info'><div class='panel-heading'><h4 class='panel-title'> <a data-toggle='collapse' data-parent='#accordion" + itemToAdd.id + "' href='#collapse" + itemToAdd.id + "' > <span class='glyphicon glyphicon-plus'></span> View Details</a></h4></div><div id='collapse" + itemToAdd.id + "' class='panel-collapse collapse'><div class='panel-body'><div class='well'><textarea class='form-control' rows='11'>" + itemToAdd.snippetContent + "</textarea></div></div></div></div><div class='panel panel-info'><div class='panel-heading'><h4 class='panel-title'> <a data-toggle='collapse' data-parent='#accordion" + itemToAdd.id + "' href='#collapseTwo" + itemToAdd.id + "'> <span class='glyphicon glyphicon-plus'></span> Comments</a></h4></div><div id='collapseTwo" + itemToAdd.id + "' class='panel-collapse collapse'><div class='panel-body'> <a href='#' class='btn btn-success' data-toggle='modal' data-target='#commentModal'>Add a Comment</a><div> <br></div><div class='well'><p>Comments go here.</p></div></div></div></div></div></div> </a></div></div></div></div>")
    }

});//end document.ready function

