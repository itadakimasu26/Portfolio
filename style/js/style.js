$(document).ready(function () {
  $("#start").click(function () {
    $("#start").fadeOut("slow");
    $(".start").remove();
    $(".left").fadeIn("slow");
    $("#right").addClass("animate");
    $(".right").fadeIn("slow");
  });
});
