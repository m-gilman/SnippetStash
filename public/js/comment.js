$(document).ready(function () {
    var url = window.location.search;
    var dir = window.location.pathname; 
    // var commentTitle = $("#CommentTitle")
    var titleInput = $('#CommentTitle')
    var commentText = $("#CommentText")
    var commentForm = $("#comment-form")
    var savedComments = $(".well")

    //comment submission
 $(commentForm).on("submit", function handleCommentSubmit(event) {
    event.preventDefault();
    
    // Wont submit the comment if we are missing title or content
    if (!titleInput.val().trim() || !commentText.text()) {
        console.log("Form Fields need to be completed!!!")
        console.log("Comment Title: " + titleInput.val().trim());
        console.log("Comment Text: " + commentText.val().trim());
        return;
    }
    // Constructing a newComment object to hand to the database
    var newComment = {
        titleComment: titleInput.val().trim(),
        commentContent: commentText.val().trim(),
    };
    insertComment(newComment);

});

function insertComment(newComment) {
    var comid = newComment;
    var memid = newComment.UserId;
    // savedComments 
    $.post("/api/comments", newComment, function () {
        console.log("hi there!")
        window.location.href = dir + "?comId=" + comid + "&userId=" + memid;
        // window.location.href = savedComments ;
    });
};



});