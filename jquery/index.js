/* the script file for this project
   jQuery examples following*/

//$("h1").addClass("big-title");

$("button").click(function(){
  $("h1").fadeOut();
  $("h1").fadeIn();
  $("h1").slideUp();
  $("h1").slideDown();
});

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
  //alert("h1 clicked, n shit");
  $("h1").text("April fools!");
  $("a").text("yahoo");
});

$(document).keypress(function(event){
  $("h1").text(event.key);
});
