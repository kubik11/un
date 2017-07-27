$(function() {

	// Custom JS


	//trigger submenu

	var $li = $('.top-nav ul li:nth-child(2)');

	$li.click(function (){
		var $sub = $('.embeded-nav');
		if ($sub.hasClass('embeded-nav-active')){
			$sub.removeClass('embeded-nav-active');
			$li.removeClass('li-active');
			$sub.fadeOut();
		}else{
			$sub.fadeIn();
			$li.addClass('li-active');
			
			$sub.addClass('embeded-nav-active');
		}
	});

//===================================SLIDER============================//

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	loop: true,
  	items: 1,
  	autoplay: true,
  	autoplayHoverPause: true,
  	nav: true,
  	smartSpeed: 1000,
  	navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>"
,"<i class='fa fa-angle-right' aria-hidden='true'></i>"
]
  	//autoWidth: true
  });


 });
//Products carousel

 $('.carousel').owlCarousel({
 	loop: true,
  	items: 3,
  	autoplay: true,
  	autoplayHoverPause: true,
  	nav: true,
  	smartSpeed: 1000,
  	autoWidth: true,
  	navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>"
,"<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	 responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
            nav:true,
        }
    }


});

});
