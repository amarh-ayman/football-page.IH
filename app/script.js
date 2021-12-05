let rotate = 0.5;
$("#most-important-competition").on("click", function () {
  $("#most-important-competition").css("transform", `rotate(${rotate}turn)`);
  rotate += 0.5;
});

$("footer .games li").on("click", function (e) {
  e.preventDefault();
  $("footer .games li").removeClass("active");
  $(this).toggleClass("active");
});
