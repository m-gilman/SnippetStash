var globalUser;
$(document).ready(function () {
    var dir = window.location.pathname;
    var uid;
    var url;

    getUser();
    getCategories();
    
    function getUser() {
        $.get("/api/user", function (data) {
            var userId = data.UserId;
            globalUser = data.UserId;
            uid = userId
        });
    };

    function getCategories() {
        $.get("/api/categories", function (data) {
            var itemToAdd = [];
            for (var i = 0; i < data.length; i++) {
                itemToAdd.push(renderNavbarList(data[i]));
            }
        });
    };  
    
        
    
    function renderNavbarList(itemToAdd) {
    var id = itemToAdd.id;
    if (dir ==="/public"){
        url= "<a href='"+dir+"?catId=" +id+ "'><i class='fa  fa-fw'</i>" +itemToAdd.catName + "<span></span> </a>"
    } else {
        url = "<a href='"+dir+"?catId=" +id+ "&userId=" + uid +"'><i class='fa  fa-fw'</i>" +itemToAdd.catName + "<span></span> </a>"
    }
    var newLi = $("<li/>").appendTo('#side-menu');
    newLi.data("category", itemToAdd);
    newLi.attr("id", id);
    newLi.append(url);
    return newLi;
    }

    

});


