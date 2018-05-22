$(document).ready(function() {
    /* global moment */
  
    // snippetContainer holds all of our snippets
    var snippetCode = $("#snippetCode");
    var snippetCategorySelect = $("#snippetCategory");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleSnippetDelete);
    $(document).on("click", "button.edit", handleSnippetEdit);
    $(document).on("click", "submitSnippet",handleSnippetSubmit);
    // Variable to hold our snippets
    var snippets;
  
    // The code below handles the case where we want to get snippets for a specific user
    // Looks for a query param in the url for user_id
    var url = window.location.search;
    var userId;
    if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
      getSnippets(userId);
    }
    // If there's no userId we just get all snippets as usual
    else {
      getSnippets();
    }
  
  
    // This function grabs snippets from the database and updates the view
    function getSnippets(user) {
      userId = user || "";
      if (userId) {
        userId = "/?user_id=" + userId;
      }
      $.get("/api/snippets" + userId, function(data) {
        console.log("Snippets", data);
        snippets = data;
        if (!snippets || !snippets.length) {
          displayEmpty(user);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete snippets
    function deleteSnippet(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/snippets/" + id
      })
        .then(function() {
          getSnippets(snippetCategorySelect.val());
        });
    }
  
    // InitializeRows handles appending all of our constructed post HTML inside snippetCode
    function initializeRows() {
      snippetCode.empty();
      var snippetsToAdd = [];
      for (var i = 0; i < snippets.length; i++) {
        snippetsToAdd.push(createNewRow(snippets[i]));
      }
      snippetCode.append(snippetsToAdd);
    }
  
    // This function constructs a snippet's HTML
    function createNewRow(snippet) {
      // var newSnippetCard = $("<div>");
      // newSnippetCard.addClass("card");
      // var newSnippetCardHeading = $("<div>");
      // newSnippetCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("delete");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newSnippetTitle = $("<h2>");
      // var newSnippetUser = $("<h5>");
      // newSnippetUser.text("Written by: " + snippet.User.name);
      // newSnippetUser.css({
      //   float: "right",
      //   color: "blue",
      //   "margin-top":
      //   "-10px"
      // });
      var newSnippetCardBody = $("<div>");
      newSnippetCardBody.addClass("card-body");
      var newSnippetBody = $("<p>");
      newSnippetTitle.text(snippet.title + " ");
      newSnippetBody.text(snippet.body);
      // newSnippetDate.text(formattedDate);
      newSnippetTitle.append(newSnippetDate);
      // newSnippetCardHeading.append(deleteBtn);
      newSnippetCardHeading.append(editBtn);
      newSnippetCardHeading.append(newSnippetTitle);
      // newsnippetCardHeading.append(newSnippetUser);
      newSnippetCardBody.append(newSnippetBody);
      // newSnippetCard.append(newSnippetCardHeading);
      // newSnippetCard.append(newSnippetCardBody);
      newSnippetCard.data("snippet", snippet);
      return newSnippetCard;
    }
  
    // This function figures out which snippet we want to delete and then calls deleteSnippet
    function handleSnippetDelete() {
      var currentSnippet = $(this)
        .parent()
        .parent()
        .data("snippet");
      deleteSnippet(currentSnippet.id);
    }

     // This function figures out which snippet we want to submit and then calls submitSnippet
     function handleSnippetSubmit() {
      var currentSnippet = $(this)
        .parent()
        .parent()
        .data("snippet");
      submitSnippet(currentSnippet.id);
    }


  
    // This function figures out which snippet we want to edit and takes it to the appropriate url
    function handleSnippetEdit() {
      var currentSnippet = $(this)
        .parent()
        .parent()
        .data("snippet");
// --------------------------------        -----------------------------
      window.location.href = "/cms?snippet_id=" + currentSnippet.id;
    }
//  ------------------------------------------------------------------------ 
    // This function displays a message when there are no snippets
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for User #" + id;
      }
      snippetCode.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No snippets yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
      snippetCode.append(messageH2);
    }
  
  });
  