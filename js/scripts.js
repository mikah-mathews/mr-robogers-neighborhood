// back logic
var numberCount = [];
var startCount = 0;
var startCountString = startCount.toString();

let strToInt = function(userInput) {
  return parseInt(userInput);
}

let intToStr = function(userInput) {
  return userInput.toString();
}

var numCheckLogic = function() {
  let numberToCheck = startCount;
  let strNum = intToStr(numberToCheck);
  if((strNum).includes('3')) {
    $("#numberOutput").append("Won't you be my neighbor?" + "<br>");
  } else if((strNum).includes('2')) {
    $("#numberOutput").append("Boop" + "<br>");
  } else if((strNum).includes('1')){
    $("#numberOutput").append("Beep" + "<br>");
  } else {
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
    } 
  }
}



//front end logic
$(document).ready(function() {
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
    counterLoop(userInput);    
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