  //AJAX Asynchronous Javascript and XML
  // exchanges dadta with a server, without reloading the whole page
      // function that displays the gifs
      //example uses Jquery
    
    //single-ajax.html or one can use the following code multiple time for mulitiple code
	function displayGifs() {
		var shoe = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + shoe + "&api_key=BsVC2oqJgs4P02YFYAmIWMZIDukzNH93&limit=10";
		
	$.ajax({
		url: queryURL,
		method: 'GET'
    }).then(function(response) {
        console.log(response);
      
    });

    //my-ajax html
    var userInput = "Coming to America";
    var baseUrl =  "http://omdbapi.com/?apikey=trilogy&s=";
    var url = baseUrl + userInput;
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .then(function(response) {
        console.log(response);
        for (var i = 0; i < response.Search.length; i++) {
            console.log(response.Search[i]);
        }
    }

    //button-triggered-ajax-solution.html