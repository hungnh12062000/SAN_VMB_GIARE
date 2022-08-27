
$(document).ready(function () {

     // Radio page payment
     $('.methods-header input[type="radio"]').click(function () {
          $('.methods-content').stop().css({ visibility: 'visible', display: 'block' }).slideUp('400');
          $(this).parent('div').next('.methods-content').css({ visibility: 'visible', display: 'none' }).slideDown('400');

     });

     // ===== Scroll to Top ==== 
     $(window).scroll(function () {
          if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
               $('.scroll-to-top').fadeIn(200);    // Fade in the arrow
               $('.scroll-to-top').css('display', 'block');    // Fade in the arrow
          } else {
               $('.scroll-to-top').fadeOut(200);   // Else fade out the arrow
          }
     });
     
     $('.scroll-to-top').click(function () {      // When arrow is clicked
          window.scrollTo({ top: 0, behavior: 'smooth' });
     });

});