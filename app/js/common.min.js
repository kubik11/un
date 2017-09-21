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

 $('.owl-carousel.carousel').owlCarousel({
 	loop: true,
  	items: 3,
  	//autoplay: true,
  	autoplayHoverPause: true,
  	smartSpeed: 1000,
  	margin: 100,
  	responsiveClass:true,
  	//autoWidth: true,
  	navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>"
,"<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	nav: true,
	responsive:{
        0:{
            items: 1,
            nav: true
        },
        770:{
            items: 2,
            nav: true,
        },
       992:{
            items: 2,
            nav: true,
        },
        1200:{
            items: 3,
            nav: true,
        }
    }
    


});
$('.products-carousel .owl-nav').css('display','block');

});

//button click

	$(document).ready(function(){
		$('.hamburgerr').click(function(){
			var burger = $(this).children();
			if (!burger.hasClass('is-active')){
			$(this).children().addClass('is-active');
			}else{
				$(this).children().removeClass('is-active');
			}
		});

		$(window).resize(function(){
			var width = $(window).width();
			var elem = $('.hamburgerr');
			//alert(width);
			if (width > 990){
				elem.css('display', 'none');
			}else{
				elem.css('display', 'inline-block');
			}

		$('.hamburger').click(function(){
			mobileMenu();
		});
//if($(".one").hasClass('two')) ; // Использовать на наличие класса
			function mobileMenu(){
				var $div = $('<div></div>');
					$div.attr({class: 'parent' });
					$div.attr('data-position', -1000);
				var $content = $('<p></p>').innerHTML = "hi dude";
					$div.append($content);
					$('body').append($div);

					var $position = $('.parent').attr('data-position');
					$position = +$position;
				function moveToTheLeft(){			
						while($position < 0){
							$position += 10;
							setTimeout(moveTo(), 100);
						} 
					}	
			
				function moveTo(){
					var $parent = $('.parent');
					$parent.css('right', $position + "px" );
				}
				moveToTheLeft();
			}
		});
	});