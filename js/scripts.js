// back logic
var printedArray = [];
var startCount = 0;
function counter(numberInput) {
  for(i = 0; i < numberInput; i++) {
    startCount = startCount + 1;
    printedArray.push(startCount);
    console.log(startCount);
    console.log(printedArray);
    return startCount;
  }
}





//front end logic
$(document).ready(function() {
  
  
  
  
  $("#startButton").click(function() {
    event.preventDefault();
    $(".robot-start").hide();
    $(".robot-input").show();
  });

  $("#submit").click(function() {
    event.preventDefault();
    $(".robot-input").hide();
    $(".output").show();
    var userInput = $("#number").val();
    var numInput = parseInt(userInput);
    var countOutput = counter(numInput)
    console.log(userInput);
    console.log(numInput);
    console.log(countOutput);
    $(".output").text(countOutput);
    
  });

  $("#restartButton").click(function() {
    event.preventDefault();
    $(".output").hide();
    $(".robot-input").show();
  });
  
});