$(document).ready(function() {
  $("form").submit(function(event) {
    var yodaSelected = $("#checkbox_yoda:checked").length === 1;
    var somebodySelected = $("input[name='character']:checked").length > 0;
    if (!yodaSelected && somebodySelected) {
      event.preventDefault();
      var imperialMarch = new Audio("imperial_march.mp3");
      imperialMarch.play();
    }
  });
});
