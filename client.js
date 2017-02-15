
$(document).ready(function() {
  var colors = ["red", "green", "yellow", "blue"];

//button click function
  $("#container").on("click", "#colorBlocks", function() {
    if($(this).data('pigment') == currentColor) {
      $("#message").text("Success! Huge High Five!!!");
      randomColor();
    } else {
//Changes the <h3> on index.html
      $("#message").text("Try Again!");
    }
  });
//picks random color based from randomNumber() that was in the discription of the homework
  function randomColor() {
    //When values for randomNumber(0, colors.length) only 2 colors are being picked, why?
//sets value to open string in the $(document).ready(function()
    currentColor = colors[randomNumber(0, colors.length-1)];
      }
    var currentColor = "";
//Appends Blocks to <h1>
  function makeBlocks() {
    for(var i = 0; i < colors.length; i++) {
//gives blocks an ID for css and creates the blocks on the DOM
      $("#container").append('<h1 id="colorBlocks"></h1>');
      var block = $("#container").children().last();
      (block).data('pigment', colors[i]);
      (block).css('background-color', colors[i]);
    }
  }
  makeBlocks();
  randomColor();
});
//randomNumber for randomColor
//function was from the discription of the homework
//OK to be in global scope?
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
