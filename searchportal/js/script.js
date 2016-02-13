// JavaScript Document
jQuery(window).ready(function($) {
     $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: true,
        slideshow: true,
		 //itemWidth: 424,
        //itemMargin: 0,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
	$('#slider1').flexslider({
        animation: "slide",
		directionNav: false,
        controlNav: true,
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: true,
        slideshow: true,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
		$('#slider2').flexslider({
        animation: "slide",
		directionNav: true,
        controlNav: false,
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
	$('#slider3').flexslider({
        animation: "slide",
		directionNav: true,
        controlNav: false,
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
	

});

jQuery(document).ready(function($) {

    $('*[data-animate-to]').each(function() {
        var _this = $(this);
        _this.addClass('animate').waypoint(function() {
            var _animateTo = $(this).attr('data-animate-to');
            $(this).removeClass('animate').addClass('animated').addClass(_animateTo);
        }, {
            offset: '25%',
            triggerOnce: false
        });
    });

});




jQuery( document ).ready(function($) {
// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 500);
			})
		   });
 jQuery(document).ready(function($) {
            $('.parallax').parallax();
        })
	
//$(document).ready(function() {
//    $('.nav li.dropdown').hover(function() {
//        $(this).addClass('open');
//    }, function() {
//        $(this).removeClass('open');
//    });
//});	