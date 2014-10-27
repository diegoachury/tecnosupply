jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //	1. Product Carousel
    //	2. Partner Carousel
    //	3. Client Testimonial Carousel
    //	4. Latest News Carousel
    //	5. Go to Top
    //	6. Revolution Slider
    //	7. Accordion
    // -------------------------------------------------------------

    (function () {

    }());


    // -------------------------------------------------------------
    //  Product Carousel
    // -------------------------------------------------------------

	
    (function () {
	
		$(".css-product").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		pagination : false,  
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
		});
		 
		$(".css-product-navigation .next").click(function(){
		$(".css-product").trigger('owl.next');
		})

		$(".css-product-navigation .prev").click(function(){
		$(".css-product").trigger('owl.prev');
		})
	
    }());	
	

    // -------------------------------------------------------------
    // Partner Carousel
    // -------------------------------------------------------------


    (function () {

		$(".clients").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		pagination : false,  
		items : 6,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
		});
		 
		// Custom Navigation Events
		$(".clients-navigation .next").click(function(){
		$(".clients").trigger('owl.next');
		})
		$(".clients-navigation .prev").click(function(){
		$(".clients").trigger('owl.prev');
		})	
	
	
    }());


    // -------------------------------------------------------------
    // Client Testimonial Carousel
    // -------------------------------------------------------------


    (function () {
	
		$(".client-testimonial").owlCarousel({
		autoPlay: 5000, //Set AutoPlay to 3 seconds
		pagination : false,  
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		itemsTablet : [768,1]
		});
		 
		// Custom Navigation Events
		$(".client-testimonial-navigation .next").click(function(){
		$(".client-testimonial").trigger('owl.next');
		})
		$(".client-testimonial-navigation .prev").click(function(){
		$(".client-testimonial").trigger('owl.prev');
		})

    }());

	
    // -------------------------------------------------------------
    // Latest News Carousel
    // -------------------------------------------------------------

    (function () {

		$(".latest-news").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		pagination : false,  
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [979,2]
		});
		 
		$(".latest-news-navigation .next").click(function(){
		$(".latest-news").trigger('owl.next');
		})

		$(".latest-news-navigation .prev").click(function(){
		$(".latest-news").trigger('owl.prev');
		})	
	
    }());


    // -------------------------------------------------------------
    // Go to Top
    // -------------------------------------------------------------

    (function () {

		$.scrollUp({
			  scrollText        : '', 
			  topDistance       : '300',
			  animation         : 'fade',
			  animationInSpeed  : 200,
			  animationOutSpeed : 200,
		});	
    }());


    // -------------------------------------------------------------
    // Revolution Slider
    // -------------------------------------------------------------
    (function () {

	   jQuery('.tp-banner').revolution(
		{
			delay:9000,
			startwidth:665,
			startheight:470,
			hideThumbs:10,
			navigationType:"none",
			hideTimerBar:"on",
		});	
	
    }());



    // -------------------------------------------------------------
    // Accordion
    // -------------------------------------------------------------
    (function () {

		$('.collapse').on('show.bs.collapse', function() {
			var id = $(this).attr('id');
			$('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
			$('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus-square"></i>');
		});
		$('.collapse').on('hide.bs.collapse', function() {
			var id = $(this).attr('id');
			$('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
			$('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus-square"></i>');
		});		
	
    }());



});



	
	