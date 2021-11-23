
	
$(function(){
    $(".fancy").fancybox();
	
	$(".yy-mask").mask("9999 – 9999");

	$('.sportselect .open-select').click(function(){
		$(this).parents('.sportselect').toggleClass('opened');
	})

		
	$('body').on('click', '.go-reg', function(e){
		e.preventDefault();
		$('.authForm').hide();
		$('.formReg').show();
	});	
		
	$('body').on('click', '.go-auth', function(e){
		e.preventDefault();
		$('.authForm').show();
		$('.formReg').hide();
	});	

	/**************************************************************
	меню
	**************************************************************/
	$('#menu_toggler').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header__navfix').toggleClass('active');
		$('body').toggleClass('noscroll');
	})
	$('.close-menu').click(function(e){
		e.preventDefault();
		$('#menu_toggler').removeClass('active');
		$('.header__navfix').removeClass('active');
		$('body').removeClass('noscroll');
	})

	/**************************************************************
	ПОПАП
	**************************************************************/
	$('.but-popup').click(function(e){
        e.preventDefault();
        let popup = $('.popup[data-popup="'+$(this).attr('data-popup')+'"]');
        //formPosition(popup);
        if ($(this).attr('data-push') != '')
        	$(popup).find('form').attr('data-push', $(this).attr('data-push'));
        $(popup).fadeIn(800); 
        $('.popup_bg').fadeIn(800);
		$('body').addClass('noscroll');
	})	
	$('.popup-close').click(function(e){
        e.preventDefault();
		$('.popup').fadeOut(500);
		$('body').removeClass('noscroll');
	})

	
	/**************************************************************
	ВЫБОРР ЯЗЫКА
	**************************************************************/
	$('.open-lang').click(function(event){
		event.preventDefault();
		$(this).parents('.form__lang').find('.lang-drop').slideToggle();
	});

	/**************************************************************
	СЛАЙДЕР НА ГЛАВНОЙ
	**************************************************************/
	$(".slider-main").slick({
        dots: true,
        arrows: false,
        infinite: true,
        // autoplay: true,
		adaptiveHeight: true,
        autoplaySpeed: 8000,
        speed: 300,
        slidesToShow: 1
    });



	/**************************************************************
	СЛАЙДЕР ИГРОКОВ НА ГЛАВНОЙ
	**************************************************************/
	$(".home_player-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
		fade: true,
        // autoplay: true,
		adaptiveHeight: true,
        autoplaySpeed: 8000,
        speed: 300,
        slidesToShow: 1
    });
	
	
	/**************************************************************
	Карусели в деталке 
	**************************************************************/
	$(".personal-carousel").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		// focusOnSelect: true,
		infinite: false,
		// variableWidth: true,
		draggable: false,
		responsive: [
			{
					breakpoint: 980,
					settings: {
						slidesToShow: 3
					}
			},
			{
					breakpoint: 768,
					settings: {
							vertical: false,
						slidesToShow: 3
					}
			},
			{
					breakpoint: 480,
					settings: {
							vertical: false,
						slidesToShow: 2
					}
			}
		] 
	});

	/**************************************************************
	РЕДАКТИРОВАНИЕ КАРТОЧКИ
	**************************************************************/
	$('.personal-change').click(function(event){
		event.preventDefault();
		console.log('11');
		
		$('.personal__changeblock').removeClass('changeblock-hide');
		$('.personal__showblock').addClass('changeblock-hide');
	});
	$('.personal-cancel').click(function(event){
		event.preventDefault();
		$('.personal__changeblock').addClass('changeblock-hide');
		$('.personal__showblock').removeClass('changeblock-hide');
	});


	/**************************************************************
	РАБОТА С ВИДЕО В КАРТОЧКЕ
	**************************************************************/
	var countVideo = $('#slider_main').slick("getSlick").slideCount;
	$('body').on('click', '.personal-carousel a', function(event){
		event.preventDefault();
	});
	//Добавление
	$('.add-video input').change(function(event){
		event.preventDefault();
		$('.popup-video').fadeIn();
		$('body').addClass('noscroll');
	});	
	//Редактирокание
	$('.change-video').click(function(event){
		event.preventDefault();
		$('.popup-video').fadeIn();
		$('body').addClass('noscroll');
	});	
	//Удаление
	$('body').on('click', '.delete-video', function(event){
		event.preventDefault();
		//$(this).parents('.personal-carousel').slick('slickRemove', $(this).parents('.slick-slide').index());
		//$(this).parents('.slick-slide').remove();
		//$(this).parents('.personal-carousel').on('setPosition');
	});	




	$('body').on('click', '#add_training', function(event){
		event.preventDefault();
		$('.popup-training').fadeIn();
		$('body').addClass('noscroll');
	});	
	
	$('body').on('click', '#save_training', function(event){
		$('.popup-training').append( $('#loader-start').html() );
	});	
});

/**************************************************************
СТИЛИЗАЦИЯ ЭЛЕМЕНТОВ ФОРМЫ
**************************************************************/
(function($) {
	$(function() {
		$('.styler').styler({
			selectSearch: true
		});
	});
})(jQuery);
