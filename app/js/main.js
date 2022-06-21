$(function () {
  $(".nav-menu__toggle").on("click", function () {
    $(".nav-menu__wrapper").toggleClass("show");
    $("body").toggleClass("hide");
  });
});
