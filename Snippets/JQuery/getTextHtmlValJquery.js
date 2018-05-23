// Three simple, but useful, jQuery methods for DOM manipulation are:

// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields

// The following example demonstrates how to get content with the jQuery text() and html() methods:
// Example
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
});

// The following example demonstrates how to get the value of an input field with the jQuery val() method:
// Example
$("#btn1").click(function(){
    alert("Value: " + $("#test").val());
});

