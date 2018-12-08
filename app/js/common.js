$(function() {
	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right' ], 
		navbar: {
			title: '<img src="img/logo1.png" alt="MELNIK - Официальный сайт студии татуировки и пермаментного макияжа">'
		}
	});
		var API = $('#my-menu').data('mmenu');
		var $icon = $('.hamburger');
		
		API.bind( "open:start", function(){
		setTimeout(function(){
		$icon.addClass( "is-active" );
		}, 10);
	});

		API.bind( "close:start", function() 
		{
		setTimeout(function() {
		$icon.removeClass( "is-active" );
		}, 10);
	});
//////////////////////////////////////////////////////////////////
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		}, 100);
	});
	
	$('.carousel-services').owlCarousel({
		loop: true,//чтобы не тянулась, а была бесконечной
		nav: true , //добавляем стрелочки
		smartSpeed: 700, //скорость карусельки
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true, //т.к. у нас адаптивная карусель, то нужно добавить этот параметр (карусель при уменьшении экрана будет всегда иметь 3 колонки) и т.к. нам нужно адаптивная карусель, то добавляем след. параметр
		responsive: {
			0: { //максимальное разрешение
				items: 1 //кол-во айтомов, которые будут отображаться
			},
			768: { //когда превышает 800px, то появляется 2 айтема уже
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	function carouselService(){
		$('.carousel-services-item').each(function(){
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	} carouselService();

$('.carousel-services-composition .h3').each(function(){
	var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
$('section .h2').each(function(){
	var ths = $(this);
	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
//////////////////////////////////////////////
$('select').selectize();

$('.reviews').owlCarousel({
	loop: true,
	items: 1,
	smartSpeed: 700,
	nav: false,
	autoHeight: true	
});

$('.rewards').owlCarousel({
	loop: true,
	smartSpeed: 700,
	items: 4,
	nav: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		768: {
			items: 3
		},
		992: {
			items: 4
		}
	}
});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()){ //вычисляем высоту this, т.е. высоту window и если она больше высоты экрана, т.е. высоты window, то мы выполняем след.ф-ию:
			$('.top').addClass('active'); //ищем селектор top и добавляем ему класс active
		}
		else{
			$('.top').removeClass('active'); //иначе, если мы наоборот поднимаем вверх, то прописываем противоположную функцию
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing'); //при клике мы берем html и body, сначала мы выполняем ф-ию stop, чтобы если у нас уже какая-то анимация есть, чтобы она у нас останавливалась, а затем мы скроллим вверх с определенными параметрами slow(медленно) и swing
	});	
	
	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});