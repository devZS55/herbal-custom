// Animations call 

// AOS.init({
//     duration: 1200,
//     once: true,
// })

// new WOW().init();


// end Animation 




 $(document).ready(function () {
    $("#navbar").on("click", function() {
      $(".nveMenu").addClass("is-opened");
      $(".overlay").addClass("is-on");
    });

    $(".overlay").on("click", function() {
      $(this).removeClass("is-on");
      $(".nveMenu").removeClass("is-opened");
    });
  });
// CLOSE BTN
  $(".overlay").on("click", function() {
    $(this).removeClass("is-on");
    $(".nveMenu").removeClass("is-opened");
  });

  $(".close-btn-nav").click(function(){
  $(".nveMenu").removeClass("is-opened");
  $(".overlay").removeClass("is-on");
  });
  // RESPONSIVE NAVIGATION

// counter start at six-wrap class 
// JS 

// $(window).on('scroll', function () {
//     if ($(window).scrollTop() >= $('.six-wrap').offset().top + $('.six-wrap').outerHeight() - window.innerHeight){
//         counterrr();
//     }
// });


// function counterrr() {
//     $('.counter').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 3000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
//     $('.counter1').removeClass('counter');
// }

// close 











// scroll behavior 
// window.scroll({
//     behavior: 'smooth'
// });




// collapse hide on complete body click expert header-menulink-main 

// $(document).on('click', function (event) {
//     if (!$(event.target).closest('.header-menulinks-main').length) {
//         $('.collapse').collapse('hide');
//     }
// });


// inner click closing in  industry-inner class 

// $(".industry-inner").click(function () {
//     $('.collapse').collapse('hide');
// });



jQuery(function($) {
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.navi-2 ul a').each(function() {
      if (this.href === path) {
        $(this).addClass('active');
      }
    });
  });
$('.testi-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });

  $('.disease-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
  });



$('.our-pro-sli .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
  });


  $('.our-hearal-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    animateOut: 'fadeOut',
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplay: true,
    pagination: false,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });





  let mybutton = document.getElementById("btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}