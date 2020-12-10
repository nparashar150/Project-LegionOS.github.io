(function($) {
    "use strict"; 	
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 2000);
		}
		hidePreloader();
	});
    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
		},
        loop: false,
        spaceBetween: 60,
        slidesPerView: 5,
		breakpoints: {
            380: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            516: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        }
    });
    var imageSlider = new Swiper('.sqrd-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: false,
        spaceBetween: 30,
        slidesPerView: 8,
		breakpoints: {
            380: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            516: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 35
            },
        }
    });
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
      }
})(jQuery);