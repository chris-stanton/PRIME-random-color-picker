
$(document).ready(function() {
  var colors = ["red", "green", "yellow", "blue"];
  var currentColor = "";

  generateBlocks();
  randomColorPicker();

//button click function
  $("#blockContainer").on("click", "#colorBlocks", function() {
    if($(this).data('color') == currentColor) {
      $("#tryAgainMessage").text("Success! Huge High Five!!!");
//how do you clear "#tryAgainMessage" if alert is used when correct?
      //alert("Success! Huge High Five!!!");
      randomColorPicker();
    } else {
//Changes the <h3> on index.html
      $("#tryAgainMessage").text("Try Again!");
    }
  });

//picks random color based from randomNumber() that was in the discription of the homework
  function randomColorPicker() {
  //When values for randomNumber(1, colors.length) only 2 colors are being picked, why?
//sets value to open string in the $(document).ready(function()
      currentColor = colors[randomNumber(0, colors.length-1)];
    }

//Generates Blocks to <div>
  function generateBlocks() {
    for(var i = 0; i < colors.length; i++) {
  //can't figure out how to append to multiple <div>'s
  //decides to go with one <div> and append a new <div> to it
  //not sure if this is right or best?
//gives blocks an ID for css
      $("#blockContainer").append('<h1 id="colorBlocks"></h1>');
      var block = $("#blockContainer").children().last();
      (block).css('background-color', colors[i]);
      (block).data('color', colors[i]);
    }
  }
});

//randomNumber for randomColor
//function was from the discription of the homework
//OK to be in global scope?
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
