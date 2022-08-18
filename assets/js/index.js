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

     //Calender
     var from_$input = $('#input_from').pickadate(),
          from_picker = from_$input.pickadate('picker')

     var to_$input = $('#input_to').pickadate(),
          to_picker = to_$input.pickadate('picker')


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


});