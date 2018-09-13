var initialSrc = 'assets/img/navbar-logo-white.png';
var scrollSrc = 'assets/img/navbar-logo-blue.png';

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 200)
      $("#sunmihall-logo").attr("src", scrollSrc);
   else
      $("#sunmihall-logo").attr("src", initialSrc);
});
