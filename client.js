//Use only with jQuery
$(document).ready(function() {

//adds four buttons later to the BOM
  for (var i = 0; i < 4; i++) {
    var newButton = $('<button></button>');
    $('div').append(newButton);
    newButton.text('color');  //text in button
    newButton.data('idNumber', i);
    var color = ['red', 'green', 'yellow', 'blue'];

//adds buttons to the DOM
    $('body').append(newButton);
}

//Button click function
    $('button').on('click', function(){
        //console.log($(this).data());
        console.log($(this).data().idNumber + ' button was clicked!');


//function random generates - example code
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
    if (color == i){
    prompt('success! Pick another block randomly');
  } else {
    prompt('try again');
}

});
});

// $(document).ready(function() {
//   for (var i = 0; i < 10; i++) {  //for loop adds 10 buttons to the DOM
//     var newButton = $('<button></button>');  // when creating must use <> brackets
//     newButton.text('Click Me! I am a button');  //adds text to the button
//     newButton.data('idNumber', i);  //stores info without displaying it - IDs are common but not displayed on the screen
//                                     // 'idNumber' is the key and 1 is the value
//                                     // i refers to the specific button number pressed
//     newButton.data('cool secret', 'kris has big ears');  //line creates a new property value to the object
//     $('body').append(newButton);  //creates a button
//     }
//
// $('button').on('click', function(){
//     console.log($(this).data()); // info stored but not shown
//     console.log($(this).data().idNumber + ' button was clicked!');
//     console.log()
//
//   });
// });

//.css( propertyName, value )

//use jquery .css to change colors
