$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));
  if(height <= 24) {
    $(".rideDescription1").show();
    $("#twister").addClass("green");
    $("#rollerCoaster").addClass("red");
    $("#logRide").addClass("red");
    $("#teaCup").addClass("red");
  } else if (height <= 48) {
    $(".rideDescription1").show();
    $(".rideDescription2").show();
    $(".rideDescription3").show();
    $("#twister").addClass("green");
    $("#rollerCoaster").addClass("green");
    $("#logRide").addClass("green");
    $("#teaCup").addClass("green");
  } else if (height <= 72) {
    $(".rideDescription2").show();
    $(".rideDescription3").show();
    $(".rideDescription4").show();
    $("#twister").addClass("red");
    $("#rollerCoaster").addClass("green");
    $("#logRide").addClass("green");
    $("#teaCup").addClass("green");
  } else {
    alert("Invalid height! Please provide a number between 0 and 72");
  }

});
