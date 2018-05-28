$(document).ready(function () {
    var dir = window.location.pathname;
    getCategories();
    function getCategories() {
        $.get("/api/categories", function (data) {
            var itemToAdd = [];
            for (var i = 0; i < data.length; i++) {
                itemToAdd.push(renderNavbarList(data[i]));
            }
        });
    }

    
    
    function renderNavbarList(itemToAdd) {
    var id = itemToAdd.id;
    var url = "api/snippets/" + id;
    var newLi = $("<li/>").appendTo('#side-menu');
    newLi.data("category", itemToAdd);
    newLi.attr("id", id);
    newLi.append("<a href='"+dir+"?catId=" +id+ "'><i class='fa  fa-fw'</i>" +itemToAdd.catName + "<span></span> </a>");
    // newLi.append("<a href='/members?catId=" +id+ "'><i class='fa  fa-fw'</i>" +itemToAdd.catName + "<span></span> </a>");
    return newLi;
    }

    

});


