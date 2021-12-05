let rotate = 0.5;
$("#most-important-competition").on("click", function () {
  $("#most-important-competition").css("transform", `rotate(${rotate}turn)`);
  rotate += 0.5;
});
