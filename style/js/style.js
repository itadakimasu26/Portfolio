$(document).ready(function () {
  $("#start").click(function () {
    $("#start").fadeOut("slow");
    $(".start").remove();
    $(".simple").fadeIn("slower");
    $("#animated").addClass("animate");
    $(".animated").fadeIn("slow");
  });
  $("#simple").click(function () {
    $(".CV").css({"margin" : '0'});
    $(".simpleCV").addClass("animate");
  });
  $("#animated").click(function () {
    $(".animatedCV").css({"margin" : '0'});
    $(".animatedCV").addClass("animate");
  });
});
