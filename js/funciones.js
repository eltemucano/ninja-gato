$(document).ready(function () {
  $("img").on("click", function () {
    let actual = $(this).attr('src');
    let imagen = $(this).attr('data-alt-src');
    console.log(actual);
    console.log(imagen);
    $(this).attr('src',imagen);
    $(this).attr('data-alt-src',actual);
  });
});
