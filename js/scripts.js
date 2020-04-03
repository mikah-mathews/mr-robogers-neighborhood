// back logic






//front end logic
$(document).ready(function() {
  var userInput = $("#number").val();
  var numInput = parseInt(userInput);
  
  $("#startButton").click(function() {
    $(".robot-start").hide();
    $(".robot-input").show();
  });

  $("#submit").click(function() {
    $(".robot-input").hide();
    $(".output").show();
  });

  $("#restartButton").click(function() {
    $(".output").hide();
    $(".robot-input").show();
  });
});