$(document).ready(function () {

     // Slider
     $('.image-slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
          nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
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

     // Show passgenger
     $(".count-passenger").on('click', function () {
          let hasShow = $(".dropdown-box-inner").hasClass('hide'); // true
          if (hasShow) {
               $(".dropdown-box-inner").show();
               $("div.dropdown-box-inner").removeClass('hide');
          } else {
               $(".dropdown-box-inner").hide();
               $("div.dropdown-box-inner").addClass('hide');
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

     // toast
     $(".toast-close").on('click', function () {
          $(".toast-passenger").removeClass('active');
     })


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

     // show listdep and listDes
     $(document).on('click', ".input-departure", function(){
          let hide_list_dep = $('#listDep').hasClass('hide');
          if(hide_list_dep){
               $('#listDep').removeClass('hide');
               $('#listDep').addClass('show');
          } else {
               $('#listDep').addClass('hide');
               $('#listDep').removeClass('show');
          }
     })


});

function loadImages(img) {
     // swap value lazy-src and src
     const url = img.getAttribute('lazy-src');
     img.setAttribute('src', url);
}


$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});
