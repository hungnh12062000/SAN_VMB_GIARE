$(document).ready(function () {

     // Calendar
     // https://amsul.ca/pickadate.js/date/

     let from_$input = $('#input_from').pickadate({
          formatSubmit: 'dd//mm//yyyy',
          monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
          weekdaysShort: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
     })
     let from_picker = from_$input.pickadate('picker')

     let to_$input = $('#input_to').pickadate({
          formatSubmit: 'dd//mm//yyyy',
          monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
          weekdaysShort: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
     })
     let to_picker = to_$input.pickadate('picker')


     // Check if there’s a “from” or “to” date to start with.
     if (from_picker.get('value')) {
          to_picker.set('min', from_picker.get('select'))
     }
     if (to_picker.get('value')) {
          from_picker.set('max', to_picker.get('select'))
     }

     // When something is selected, update the “from” and “to” limits.
     from_picker.on('set', function (event) {
          if (event.select) {
               to_picker.set('min', from_picker.get('select'))
          }
          else if ('clear' in event) {
               to_picker.set('min', false)
          }
     })
     to_picker.on('set', function (event) {
          if (event.select) {
               from_picker.set('max', to_picker.get('select'))
          }
          else if ('clear' in event) {
               from_picker.set('max', false)
          }
     })

     // Slider
     $('.image-slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          // autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: `<button type='button' class='slick-prev slick-arrow'><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M18.5 12H6m0 0l6-6m-6 6l6 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`,
          nextArrow: `<button type='button' class='slick-next slick-arrow'><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`,
          responsive: [
               {
                    breakpoint: 1025,
                    settings: {
                         slidesToShow: 3
                    }
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 2
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         arrows: false,
                         infinite: false,
                         slidesToShow: 1
                    }
               }
          ]
     });

     //lazy loading section grid_destination
     if ("IntersectionObserver" in window) {
          //handle
          let lazyImages = $("img[lazy-src]"); //get all element img have attribute lazy-loading

          //Creating an intersection observer
          let observer = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         loadImages(entry.target); //<img />
                    }
               })
          });

          //Loop in JQUERY
          $.each(lazyImages, function (index, img) {
               observer.observe(img);
          });

     } else {
          //scroll and resize event
     }

     // show dropdown count passenger
     $(".group-passenger").on('click', function (e) {
          $(".dropdown-box-inner").show();
     });

     // show listDep and listDes
     $(document).on('click', ".input-departure", function () {
          $('.list-dep').show();

          let listItemHeight = ($(".list__dep--wrap ul").find("li:eq(1)").innerHeight()) + 150;
          $(".list__dep--wrap ul").height(listItemHeight + "px");

          $('#input_from_root').removeClass('picker--opened picker--focused');     

     });
     $(document).on('click', ".input-return", function () {
          $('.list-ret').show();

          let listItemHeight = ($(".list__ret--wrap ul").find("li:eq(1)").innerHeight()) + 150;
          $(".list__ret--wrap ul").height(listItemHeight + "px");

          $('#input_from_root').removeClass('picker--opened picker--focused');     

     });

     $(document).on("click", ".list__dep--wrap .menu div", function () {
          let numberIndex = $(this).index();

          if (!$(this).is("active")) {
               $(".list__dep--wrap .menu div").removeClass("active");
               $(".list__dep--wrap ul li").removeClass("active");

               $(this).addClass("active");
               $(".list__dep--wrap ul").find("li:eq(" + numberIndex + ")").addClass("active");

               let listItemHeight = ($(".list__dep--wrap ul").find("li:eq(" + numberIndex + ")").innerHeight());
               $(".list__dep--wrap ul").height(listItemHeight + "px");
          }
     })

     $(document).on("click", ".list__ret--wrap .menu div", function () {
          let numberIndex = $(this).index();

          if (!$(this).is("active")) {
               $(".list__ret--wrap .menu div").removeClass("active");
               $(".list__ret--wrap ul li").removeClass("active");

               $(this).addClass("active");
               $(".list__ret--wrap ul").find("li:eq(" + numberIndex + ")").addClass("active");

               let listItemHeight = ($(".list__ret--wrap ul").find("li:eq(" + numberIndex + ")").innerHeight());
               $(".list__ret--wrap ul").height(listItemHeight + "px");
          }
     })

     // when click outside to close modal 
     $(document).mouseup(function (e) { //event nhả chuột

          //modal count_passenger
          let dropdown_passenger = $(".dropdown-box-inner");
          // if the target of the click isn't the container nor a descendant of the container
          if (!dropdown_passenger.is(e.target) && dropdown_passenger.has(e.target).length === 0) {
               dropdown_passenger.hide();
          }

          //modal depart and destination
          let list_dep = $(".list-dep");
          if (!list_dep.is(e.target) && list_dep.has(e.target).length === 0) {
               list_dep.hide();

          }

          let list_ret = $(".list-ret");
          if (!list_ret.is(e.target) && list_ret.has(e.target).length === 0) {
               list_ret.hide();

          }
     });

     //Increment Value on Click
     $(".type-adult .type-plus").on('click', function () {
          let value_adult = parseInt($(".btn-value-adult").text());
          let value_child = parseInt($(".btn-value-child").text());
          let value_infant = parseInt($(".btn-value-infant").text());

          if (value_adult < 99) value_adult += 1;
          $(".btn-value-adult").text(value_adult);
          $(".count-passenger").html(value_adult + value_child + value_infant);
          $("input[name=Adult]").val(value_adult);
     })

     $(".type-adult .type-minus").on('click', function () {
          let value_adult = parseInt($(".btn-value-adult").text());
          let value_child = parseInt($(".btn-value-child").text());
          let value_infant = parseInt($(".btn-value-infant").text());
          if (value_adult > 1) value_adult -= 1;

          $(".btn-value-adult").html(value_adult);
          $(".count-passenger").html(value_adult + value_child + value_infant);
          $("input[name=Adult]").val(value_adult);
     })

     $(".type-child .type-plus").on('click', function () {
          let value_adult = parseInt($(".btn-value-adult").text());
          let value_child = parseInt($(".btn-value-child").text());
          let value_infant = parseInt($(".btn-value-infant").text());

          if (value_child < 99) value_child += 1;
          $(".btn-value-child").text(value_child);
          $(".count-passenger").html(value_child + value_adult + value_infant);
          $("input[name=Child]").val(value_child);
     })

     $(".type-child .type-minus").on('click', function () {
          let value_adult = parseInt($(".btn-value-adult").text());
          let value_child = parseInt($(".btn-value-child").text());
          let value_infant = parseInt($(".btn-value-infant").text());

          if (value_child > 0) value_child -= 1;

          $(".btn-value-child").html(value_child);
          $(".count-passenger").html(value_child + value_adult + value_infant);
          $("input[name=Child]").val(value_child);
     })

     $(".type-infant .type-plus").on('click', function () {
          let value_adult = parseInt($(".btn-value-adult").text());
          let value_child = parseInt($(".btn-value-child").text());
          let value_infant = parseInt($(".btn-value-infant").text());

          if (value_infant < value_adult && value_infant < 10) {
               value_infant += 1;
          } else {
               $(".toast-passenger").addClass('active');
               setTimeout(function () {
                    $(".toast-passenger").removeClass('active');
               }, 4000);
          }
          $(".count-passenger").html(value_child + value_adult + value_infant);
          $(".btn-value-infant").text(value_infant);
          $("input[name=Infant]").val(value_infant);
     })

     $(".type-infant .type-minus").on('click', function () {
          let value_adult = parseInt($(".btn-value-adult").text());
          let value_child = parseInt($(".btn-value-child").text());
          let value_infant = parseInt($(".btn-value-infant").text());

          if (value_infant > 0) value_infant -= 1;

          $(".btn-value-infant").html(value_infant);
          $(".count-passenger").html(value_child + value_adult + value_infant);
          $("input[name=Infant]").val(value_infant);
     })

     // Check toggle 2 chiều
     $(".toggle-direction").click(function() {
          let check = $('#cbx').is(":checked"); //off => true
          if(check){
               $("#input_to").attr("disabled", "disabled");
          } else {
               $("#input_to").removeAttr("disabled");
          }
          
      });

     // LOCATION VALUE WHEN CLICK
     $("#listDep .destination-item").on('click', function(e){
          let code_city = $(this).attr("data-city");
          $("#depinput").val( '(' + code_city + ')' + " " + $(this).text().trim());

          $("#dep").val($(this).attr("data-city"));
          if ($("#dep").val() == $("#des").val()) {
               $("#desinput").val("");
               $("#des").val("");
           }
          $('.list-ret').show();

          $(".list-dep").fadeOut("fast");
          $(".list-ret").fadeIn("fast");

          $("#desinput").select();
          return false;
          
     })

     $("#listDes .destination-item").on('click', function(e){
          let code_city = $(this).attr("data-city");

          if (code_city == $("#dep").val()) {
               $('.toast-location').addClass('active');
               setTimeout(function () {
                    $(".toast-location").removeClass('active');
               }, 4000);

           } else {
               $("#desinput").val( '(' + code_city + ')' + " " + $(this).text().trim());

               $("#des").val(code_city);
               $("#listDes").fadeOut("fast");
               $('#input_from_root').addClass('picker--opened picker--focused');     
           }
          
          return false;
          
     })

     // toast
     $(".toast-close").on('click', function () {
          $(".toast-passenger").removeClass('active');
          $(".toast-location").removeClass('active');
     })

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
          // $('body,html').animate({
          //      scrollTop: 0
          // }, "slow");
          window.scrollTo({ top: 0, behavior: 'smooth' });
     });

     // Radio page payment
     $('.methods-header input[type="radio"]').click(function () {
          $('.methods-content').stop().css({ visibility: 'visible', display: 'block' }).slideUp('400');
          $(this).parent('div').next('.methods-content').css({ visibility: 'visible', display: 'none' }).slideDown('400');

     });

});

function loadImages(img) {
     // swap value lazy-src and src
     const url = img.getAttribute('lazy-src');
     img.setAttribute('src', url);
}
