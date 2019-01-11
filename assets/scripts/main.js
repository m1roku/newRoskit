$(document).ready(function () {

	$('.hero__carousel').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		nav: true,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="10px" height="16px"> <path fill-rule="evenodd"  fill="rgb(69, 50, 43)" d="M8.733,14.292 L2.371,8.102 L8.671,1.686 C9.052,1.299 9.050,0.671 8.665,0.285 C8.281,-0.100 7.660,-0.098 7.278,0.291 L0.360,7.335 C0.334,7.362 0.309,7.391 0.286,7.420 C0.281,7.426 0.276,7.429 0.272,7.435 C-0.104,7.828 -0.092,8.456 0.298,8.836 L7.372,15.719 C7.763,16.099 8.383,16.086 8.759,15.692 C9.135,15.298 9.123,14.671 8.733,14.292 Z"/></svg>',
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="16px">  <path fill-rule="evenodd"  fill="rgb(69, 50, 43)" d="M0.267,14.292 L6.629,8.102 L0.329,1.686 C-0.052,1.299 -0.050,0.671 0.335,0.285 C0.719,-0.100 1.340,-0.098 1.722,0.291 L8.639,7.335 C8.666,7.362 8.691,7.391 8.714,7.420 C8.719,7.426 8.724,7.429 8.728,7.435 C9.104,7.828 9.092,8.456 8.702,8.836 L1.628,15.719 C1.237,16.099 0.617,16.086 0.241,15.692 C-0.135,15.298 -0.123,14.671 0.267,14.292 Z"/></svg>'
		]
	});

	// callback popup
	$('.jsPopupToggler').magnificPopup({
		type: 'inline',
		preloader: false
	});

	// menu
	let enabled = false;
	const toggleMenu = () => {
		const menu = $('.menu');
		menu.slideToggle(300);
	};

	//	dropdownMobileMenu
	const toggleDropdown = function (btn) {
		const allDropdowns = $('.jsDropdown');
		if (!btn.parent().hasClass('js_active')) {
			allDropdowns.each(function () {
				$(this).parent().removeClass('js_active');
				$(this).next().slideUp(300);
			});
		}
		btn.next().slideToggle(300);
		btn.parent().toggleClass('js_active');
	};

	const enableMobileMenu = function () {
		$('.jsMenuToggler').on('click', function () {
			toggleMenu();
		});
		$('.jsDropdown').on('click', function (e) {
			e.preventDefault();
			toggleDropdown($(this));
		});
		enabled = true;
	};

	const disableMobileMenu = function () {
		$('.jsMenuToggler').off('click');
		$('.menu').removeAttr('style');
		$('.jsDropdown').off('click');
		$('.menu__dropdownList').removeAttr('style');
		$('.menu__item').removeClass('menu__item_active');
		enabled = false;
	};


	if (window.matchMedia('(min-width: 1025px)').matches) {
		disableMobileMenu();
	}else if (!window.matchMedia('(min-width: 1025px)').matches && !enabled){
		enableMobileMenu();
	}

	$(window).on('resize', function () {
		if (window.matchMedia('(min-width: 1025px)').matches) {
			disableMobileMenu();
		}else if (!window.matchMedia('(min-width: 1025px)').matches && !enabled){
			enableMobileMenu();
		}
	});

	// tabs
	const tabsControls = $('.tabs__btn');

	const showTab = function (btn){
		$('.tabs__item').hide();
		const thisTab = $(btn.data('tab'));
		thisTab.fadeIn(500);
	};

	$('#tab1').show();
	$('[data-tab=\'#tab1\']').addClass('tabs__btn_active');

	tabsControls.on('click', function () {
		if ($(this).hasClass('tabs__btn_active')) {
			return false;
		} else {
			tabsControls.removeClass('tabs__btn_active');
			$(this).addClass('tabs__btn_active');
			showTab($(this));
		}
	});

	// accordeon
	const accToggler = $('.accordeon__toggler');
	const accContent = $('.accordeon__content');

	accToggler.on('click', function () {
		if ($(this).hasClass('accordeon__toggler_active')) {
			$(this).removeClass('accordeon__toggler_active');
			$(this).next(accContent).slideToggle();
		} else {
			accToggler.each(function () {
				$(this).removeClass('accordeon__toggler_active');
			});
			accContent.each(function () {
				$(this).slideUp();
			});
			$(this).addClass('accordeon__toggler_active');
			$(this).next(accContent).slideToggle();
		}
	});

	// youtube popup
	const showVideoReview = () => {

	};

	const onReviewClick = (e) => {
		showVideoReview(e);
	};

	const videoReviews = document.querySelectorAll('.videoReview');
	[].forEach.call(videoReviews, function (it) {
		it.addEventListener('click', onReviewClick);
	});

});
