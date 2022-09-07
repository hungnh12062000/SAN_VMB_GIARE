$(document).ready(function () {

     // Slider
     $('.image-slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          // autoplay: true,
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

});

function loadImages(img) {
     // swap value lazy-src and src
     const url = img.getAttribute('lazy-src');
     img.setAttribute('src', url);
}
