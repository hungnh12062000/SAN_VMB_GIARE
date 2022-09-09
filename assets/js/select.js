$(document).ready(function () {

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

     // show details
     $(".flight-infor-details").hide();
     $('.details').on('click', function () {
          $(this).parent().next().slideToggle(300);
     })

     // FILTER FLIGHT TRANSIT
     $("#filter-options__transit :checkbox").click(function () {
          // this = element input 
          $(".flight-list .flight-item").hide(); //hide all flight item
          $("#filter-options__transit :checkbox:checked").each(function () {
               //value of checkbox checked
               $("." + $(this).val()).fadeIn();
          });

          if ($('#filter-options__transit :checkbox').filter(':checked').length < 1) {
               $(".flight-list .flight-item").fadeIn();
          }
     })

     //FILTER FLIGHT - BRAND
     $("#filter-options__airline :checkbox").click(function () {
          // this = element input 
          $(".flight-list .flight-item").hide(); //hide all flight item
          $("#filter-options__airline :checkbox:checked").each(function () {
               //value of checkbox checked
               $("." + $(this).val()).show();
          });

          if ($('#filter-options__airline :checkbox').filter(':checked').length < 1) {
               // Không check cái nào thì show all
               $(".flight-list .flight-item").show();
          }
     })

     // reset filter
     $('.sidebar__reset').click(function () {
          $('input:checkbox').removeAttr('checked');
          $(".flight-list .flight-item").show();
     })

     // Toggle accordion
     $('.toggle-accordion-dep').on('click', function () {
          $('#OutBound').slideToggle(300);
     })

     $('.toggle-accordion-ret').on('click', function () {
          $('#InBound').slideToggle(300);
     })

     // Click radio "chọn"
     $('.checkbox-custom-label').on("click", function () {
          // $(this).parents('table').find('tr').each(function (index, element) {
          //     $(element).removeClass('marked');
          // });
          // $(this).addClass('marked');
      });

     //  Chọn chuyến bay
     $(".selectflight").on("click", function () {

          // check 
          let direction = $(this).closest(".flight-list").attr("id"); //Outbound hay Inbound
          
     })

});

