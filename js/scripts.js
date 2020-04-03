// back logic
var numberCount = [];
var startCount = 0;

function check3(number) {
  return number == 3
}

function check2(number) {
  return number == 2
}

function check1(number) {
  return number == 1
}


var numCheckLogic = function(number) {
  if(number == 3) {
    console.log("This is 3");
    return "Won't you be my neighbor?";
  } else if(number == 2) {
    console.log("This is 2");
    return "Boop";
  } else if(number == 1){
    console.log("This is 1");
    return "Beep";
  } else {
    console.log("This is not 1, 2, or 3");
  }
  
}

var counterLoop = function(numberInput) { // function that loops through numbers and adds them to the array
  for (i = 0; i <= numberInput; i++) {
    if(startCount < numberInput) {
      numberCount.push(startCount);
      startCount = startCount + 1;
      startCountString = startCount.toString();
      console.log(startCount);
      $("#numberOutput").append(startCount + "<br>");
      
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
    $('#numberOutput').empty(); //Clears previous number list
    numberCount = [];
    startCount = 0;
  });
  
});