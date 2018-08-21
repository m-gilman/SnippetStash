$(document).ready(function () {
    var url = window.location.search;
    var dir = window.location.pathname; 
    var comUserName = $('#UserComName');
    var commentText = $("#CommentText")
    var commentForm = $("#comment-form")
    var savedComments = $("#commentsSaved")
    var usrName = $(".member-id");
    var userEmail;
    // var userId;
    var memberId;

    var catId = $("#snippetCategory");

    //get user email & set it in comments
    $.get("/api/user_data").then(function (data) {
        console.log(data);
        userEmail = data.email;
        // userId = data.id;
        memberId = data.id;
        comUserName.text(userEmail);
    });


    //pass member id it use it to return comments
    function getMember(uid) {
        memberId = uid;
        if (url.indexOf("?userId=") !== -1) {
            userId = url.split("=")[1];
            if (dir === "/public") {
                getAllCommentsByUser(userId);
            } else {
                getMemberCommentsBySnippetId(userId);
            }

        }
        else {
            //displays first category snippets as default view
            userId = 1;
            if (dir === "/public") {
                getAllCommentsByUser(userId);
            } else {
                getMemberCommentsBySnippetId(userId);
            }
        }

    }

    function getAllCommentsByUser(id) {
        $.get("/api/comments/" + id, function (data) {
            var itemToAdd = [];
            for (var i = 0; i < data.length; i++) {
                itemToAdd.push(renderComments(data[i]));
            }
            getUserName(id);
        });
    }

    function getMemberCommentsByUser(id) {
        $.get("/api/user/comments/" + id, function (data) {
            var itemToAdd = [];
            for (var i = 0; i < data.length; i++) {
                itemToAdd.push(renderComments(data[i]));
            }
            getUserName(id);
        });
    }

    function getUserName(id) {
        $.get("/api/users/" + id, function (data) {
            savedComments.append(data.userName + " Comments");
        });
    }


    function renderComments(itemToAdd) {   
        var newPanelHeading = $('<div class="panel ">').appendTo('#commentsSaved');
        if (dir === "/public") {
            newPanelHeading.append(`
                <div id='collapseTwo${itemToAdd.id}' class='panel-collapse collapse'>
                <div class='panel-body'>
                    <div class='col-xs-9 text-right'>
                    <div class='huge'>${itemToAdd.commentText}</div>
                    
                    </div>
                </div>
                </div>
            `);
        } else {
            newPanelHeading.append(`
            <div id='collapseTwo${itemToAdd.id}' class='panel-collapse collapse'>
            <div class='panel-body'>
            <div class='col-xs-9 text-right'>
             <div class='huge'>${itemToAdd.commentText}</div>
                
            </div>
           
          `);
        }

    }
    //comment submission
    $(commentForm).on("submit", function handleCommentSubmit(event) {
        event.preventDefault();
        // var catId = $("#snippetCategory");s
        // Wont submit the comment if we are missing title or content
        if (commentText.val().trim() === '') {
            alert("Form Fields need to be completed!!!")

            console.log("Comment Text: " + commentText.val().trim());
        
            return;
        }
        // Constructing a newComment object to hand to the database
        var newComment = {
            snippetId: 'hard coded',
            commentUserName: userEmail,
            commentContent: commentText.val().trim(),
        };
        insertComment(newComment);

    });

    function insertComment(newComment) {
        var snipid = newComment.snippetId;
        var memid = newComment.commentUserName;
        // savedComments 
        $.post("/api/comments", newComment, function () {
            console.log("hi there!")
            window.location.href = dir + "?snipId=" + snid + "&commentUserName=" + memid;
            // window.location.href = savedComments ;
        });
    };



});