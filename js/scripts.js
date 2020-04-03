// back logic
var numberCount = [];
var startCount = 0;

var counterLoop = function(numberInput) { // function that loops through numbers and adds them to the array
  for(i = 0; i <= numberInput; i++) {
    if(startCount < numberInput) {
      numberCount.push(startCount);
      startCount = startCount + 1;
      $("#numberOutput").append(startCount + "<br>");
    } 
  }
}

// var printContent = numberCount.forEach(function(number) {
//   $("#numberOutput").append(number + "<br>");
// });





//front end logic
$(document).ready(function() {
// Variable placement is important - wasn't working until variables were placed inside submit function

  // when start button is pressed, show input form
  $("#startButton").click(function() {
    event.preventDefault();
    $(".robot-start").hide();
    $(".robot-input").show();
  });

  // when submit button is pressed, show results
  $("#submit").click(function() { 
    event.preventDefault();
    $(".robot-input").hide();
    $(".output").show();
    var userInput = $("#number").val();
    var numInput = parseInt(userInput);
    var countOutput = counterLoop(numInput)
    console.log(numberCount);
    countOutput;
    //printContent;
    
  });

  // When restart button is pressed, switch to input form again
  $("#restartButton").click(function() {
    event.preventDefault();
    $(".output").hide();
    $(".robot-input").show();
    $('#numberOutput').empty();
    numberCount = [];
    startCount = 0;
  });
  
});