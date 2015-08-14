$(document).ready(function() {
  $("a.click").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
  $(".hov_img").hover(
     function () {
         $(".three .right a").addClass("hov_img_effect");
      },
      function () {
                $(".three .right a").removeClass("hov_img_effect");
      }
    );

});