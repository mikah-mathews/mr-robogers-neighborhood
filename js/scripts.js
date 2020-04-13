// back logic
var numberCount = [];
var startCount = 0;
var startCountString = startCount.toString();
var findNumberArray = [];

var numCheckLogic = function() {
  var numberToCheck = startCount;
  if([numberToCheck].includes(3)) {
    $("#numberOutput").append("Won't you be my neighbor?" + "<br>");
  } else if([numberToCheck].includes(2)) {
    $("#numberOutput").append("Boop" + "<br>");
    
  } else if([numberToCheck].includes(1)){
    $("#numberOutput").append("Beep" + "<br>");
    
  } else {
    console.log("This is not 1, 2, or 3");
    $("#numberOutput").append(startCount + "<br>");
  }
  
}

var counterLoop = function(numberInput) { // function that loops through numbers and adds them to the array
  for (i = 0; i <= numberInput; i++) {
    if(startCount < numberInput) {
      numberCount.push(startCount);
      startCount = startCount + 1;
      numCheckLogic();
      startCountString; // sets number to string
      // numberSplitVar(startCount);
    } 
  }
}



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
    var countOutput = counterLoop(numInput);
    countOutput;

    //printContent;
    
  });

  // When restart button is pressed, switch to input form again
  $("#restartButton").click(function() {
    event.preventDefault();
    $(".output").hide();
    $(".robot-input").show();
    $('#numberOutput').empty(); //Clears previous number list
    numberCount = [];
    startCount = 0;
  });
  
});