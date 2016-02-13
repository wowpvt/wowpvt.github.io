	jQuery(window).ready(function($) {
     $('#banner').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "", //String: Set the text for the "next" directionNav item
        animationLoop: false,
        slideshow: true,
        sync: "#slider",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});