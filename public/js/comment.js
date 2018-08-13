$(document).ready(function () {
    var url = window.location.search;
    var dir = window.location.pathname; 
    // var commentTitle = $("#CommentTitle")
    var comUserName = $('#UserComName')
    var commentText = $("#CommentText")
    var commentForm = $("#comment-form")
    var savedComments = $("#commentsSaved")

    var usrName = $(".member-id");

    //comment submission
 $(commentForm).on("submit", function handleCommentSubmit(event) {
    event.preventDefault();
    // var catId = $("#snippetCategory");s
    // Wont submit the comment if we are missing title or content
    if (!comUserName.val().trim() || !commentText.text()) {
        console.log("Form Fields need to be completed!!!")
        console.log("Comment User Name: " + comUserName.val().trim());
        console.log("Comment Text: " + commentText.val().trim());
       
        return;
    }
    // Constructing a newComment object to hand to the database
    var newComment = {
        commentUserName: comUserName.val().trim(),
        commentContent: commentText.val().trim(),
       
        
    };
    insertComment(newComment);

});

function insertComment(newComment) {
    // var comid = newComment.CategoryId;
    // var memid = newComment.UserId;
    // savedComments 
    $.post("/api/comments", newComment, function () {
        console.log("hi there!")
        // window.location.href = dir + "?comId=" + comid + "&userId=" + memid;
        window.location.href = savedComments ;
    });
};



});