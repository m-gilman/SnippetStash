$(document).ready(function() {
    // Getting jQuery references to the snippet body, title, form
    var snippetInput = $("#snippetCode");
    var titleInput = $("#SnippetTitle");
    var snippetCategorySelect = $("#snippetCategory");
    var cmsForm = $("#cms");
    
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("#createSnippet", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a snippet)
    var url = window.location.search;
    // var snippetId;
    // var userId;
    // Sets a flag for whether or not we're updating a post to be false initially
    // var updating = false;
  
    // If we have this section in our url, we pull out the snippet id from the url
    // In '?snippet_id=1', snippetId is 1
    // if (url.indexOf("?snippet_id=") !== -1) {
    //   snippetId = url.split("=")[1];
    //   getSnippetData(snippetId, "snippet");
    // }
    // // Otherwise if we have an user_id in our url, preset the user select box to be our User
    // else if (url.indexOf("?user_id=") !== -1) {
    //   userId = url.split("=")[1];
    // }
  
    // Getting the users, and their snippets
    // getUsers();
  
    // A function for handling what happens when the form to create a new snippet is submitted
    function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the snippet if we are missing a body or title or caregory
      if (!titleInput.val().trim() || !snippetInput.val().trim()|| !snippetCategorySelec.val().trim()) {
        return;
      }
      // Constructing a newSnippet object to hand to the database
      var newSnippet = {
        snippetTitle: titleInput
          .val()
          .trim(),
        snippetContent: snippetInput
          .val()
          .trim(),
          catName: snippetCategorySelect
          .val()
          .trim()
       
      };
  
      // If we're updating a snippet run updateSnippet to update a snippet
      // Otherwise run submitSnippet to create a whole new snippet
      if (updating) {
        newSnippet.id = snippetId;
        updateSnippet(newSnippet);
      }
      else {
        submitSnippet(newSnippet);
      }
    }
  
    // Submits a new snippet and brings user to snippet page upon completion
    function submitSnippet(snippet) {
      $.post("/api/snippets", snippet, function() {
        window.location.href = "/snippet";
      });
    }
  
    // Gets snippet data for the current snippet if we're editing, or if we're adding to an user's existing snippets
    function getSnippetData(id, type) {
      var queryUrl;
      switch (type) {
      case "snippet":
        queryUrl = "/api/snippets/" + id;
        break;
      case "user":
        queryUrl = "/api/users/" + id;
        break;
      default:
        return;
      }
      $.get(queryUrl, function(data) {
        if (data) {
          console.log(data.UserId || data.id);
          // If this snippet exists, prefill our cms forms with its data
          titleInput.val(data.snippetTitle);
          snippetInput.val(data.snippetContent);
          catName.val(snippetCategorySelect);
          // userrId = data.UserId || data.id;
          // If we have a snippet with this id, set a flag for us to know to update the snippet
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // A function to get Users and then render our list of Users
    // function getUsers() {
    //   $.get("/api/users", renderUserList);
    // }
    // Function to either render a list of users, or if there are none, direct the user to the page
    // to create the user first
    // function renderUserList(data) {
    //   if (!data.length) {
    //     window.location.href = "/users";
    //   }
    //   $(".hidden").removeClass("hidden");
    //   var rowsToAdd = [];
    //   for (var i = 0; i < data.length; i++) {
    //     rowsToAdd.push(createUserRow(data[i]));
    //   }
    //   userSelect.empty();
    //   console.log(rowsToAdd);
    //   console.log(userSelect);
    //   userSelect.append(rowsToAdd);
    //   userSelect.val(userId);
    // }
  
    // Creates the user options in the dropdown
    // function createUserRow(user) {
    //   var listOption = $("<option>");
    //   listOption.attr("value", user.id);
    //   listOption.text(user.name);
    //   return listOption;
    // }
  
    // Update a given snippet, bring user to the snippet page when done
    function updateSnippet(post) {
      $.ajax({
        method: "PUT",
        url: "/api/snippets",
        data: snippet
      })
        .then(function() {
          window.location.href = "/snippet";
        });
    }
  });
  