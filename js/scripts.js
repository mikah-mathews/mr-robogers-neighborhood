// back logic
var numberCount = [];
var startCount = 0;

var counterLoop = function(numberInput) { // function that loops through numbers and adds them to the array
  for(i = 0; i <= numberInput; i++) {
    if(startCount < numberInput) {
      console.log("This is the number input " + numberInput);
      console.log("This is starting the loop");
      console.log(numberCount + " = array contents");
      startCount = startCount + 1;
      numberCount.push(startCount);
    } 
  }
}

var printContent = numberCount.forEach(function(number) {
  $("#numberOutput").append(number + "<br>");
});





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
    console.log(userInput);
    console.log(numInput);
    console.log(numberCount);
    countOutput;
    printContent;
    //$("#array-output").text(numberCount);
    
  });

  // When restart button is pressed, switch to input form again
  $("#restartButton").click(function() {
    event.preventDefault();
    $(".output").hide();
    $(".robot-input").show();
    numberCount = [];
    startCount = 0;
  });
  
});