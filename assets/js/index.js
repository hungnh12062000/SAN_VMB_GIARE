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

     // 

});

function loadImages(img) {
     // swap value lazy-src and src
     const url = img.getAttribute('lazy-src');
     img.setAttribute('src', url);
}
