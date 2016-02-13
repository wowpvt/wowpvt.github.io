// JavaScript Document
jQuery(window).ready(function($) {
$('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        prevText:false, //String: Set the text for the "previous" directionNav item
        nextText:false, //String: Set the text for the "next" directionNav item
        animationLoop: true,
        slideshow: true,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });	
$('#slider').flexslider({
        animation: "slide",
        controlNav: true,
        prevText:false, //String: Set the text for the "previous" directionNav item
        nextText:false, //String: Set the text for the "next" directionNav item
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });	
});