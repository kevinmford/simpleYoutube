$(document).ready(function() {

  $("#search-form").submit(function(event) {
    event.preventDefault();
    var search = $("#search-term").val();
    console.log(search);
    $("#search-term").val("");
    getVideos(search);
  });

  function getVideos(search) {
    var params = {
      part: 'snippet',
      q: search,
      key: 'AIzaSyAOlN6_KVX0PqPLsaA6raMgHhyA8DeX5Hw',
      maxResults: 40
    };
    var url = 'https://www.googleapis.com/youtube/v3/search';
    $.ajax(url,{
      type : "GET",
      data : params,
      contentType : "application/JSON",
      success : function(data){showResults(data)},
      error : function(){console.log("error")}
    })
    // $.getJSON(url, params, function(data) { 
    //  showResults(data);
    //});
  }

  function showResults(data) {
    console.log(data);
    $("#results").empty();
    var html = "";
    for (var i=0; i<data.items.length; i++) {
      html += `<li> <image src="${data.items[i].snippet.thumbnails.high.url}"class= "image-responsive little"> ${data.items[i].snippet.title} </li>`;


    }
    $("#results").append(html);
  }

});