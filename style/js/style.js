$(document).ready(function () {
  $("#start").click(function () {
    $("#start").fadeOut("slow");
    $(".start").remove();
    $(".simple").fadeIn("slower");
    $("#animated").addClass("animate");
    $(".animated").fadeIn("slow");
  });
});
