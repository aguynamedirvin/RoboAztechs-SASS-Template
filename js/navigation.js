(function($) {

	$.fn.dropMenu = function(options) {
			
			var cssmenu = $(this), settings = $.extend({
				title: "Menu",
				format: "dropdown",
				sticky: false
			}, options);

			return this.each(function() {
				cssmenu.prepend('<div id="menu-hamburger">' + settings.title + '</div>');
				$(this).find("#menu-hamburger").on('click', function(){


					$(this).toggleClass('menu-opened');

					// Define the menu
					var mainmenu = $('.navigation');


					if (mainmenu.hasClass('open')) { 
						//mainmenu.hide().removeClass('open');
						console.log('Close');
						mainmenu.slideToggle().removeClass('open');
					}
					else {
						//mainmenu.show().addClass('open');
						mainmenu.slideToggle().addClass('open');
						if (settings.format === "dropdown") {
							mainmenu.find('ul').show();

						}
					}   
				});

				cssmenu.find('li ul').parent().addClass('dropdown');

				multiTg = function() {
					cssmenu.find('.dropdown').prepend('<span class="submenu-button"></span>');
					cssmenu.find('.submenu-button').on('click', function() {
						$(this).toggleClass('submenu-opened');
						if ($(this).siblings('ul').hasClass('open')) {
							$(this).siblings('ul').removeClass('open').slideToggle();
							//$(this).siblings('ul').removeClass('open').hide();
						}
						else {
							$(this).siblings('ul').addClass('open').slideToggle();
							//$(this).siblings('ul').addClass('open').show();
						}
					});
				};

				if (settings.format === 'multitoggle') multiTg();
				else cssmenu.addClass('dropdown');

				if (settings.sticky === true) cssmenu.css('position', 'fixed');

				resizeFix = function() {
					if ($( window ).width() > 1185) {
						cssmenu.find('ul').show();
					}

					if ($(window).width() <= 1185) {
						cssmenu.find('ul').hide().removeClass('open');
					}
				};
				resizeFix();
				return $(window).on('resize', resizeFix);

			});
	};
})(jQuery);


(function($){
	$(document).ready(function(){

		$("#site-navigation").dropMenu({
			title: "Menu",
			format: "multitoggle",
		});

		// Fixes Outside Menu
//		$(".navigation li").on('mouseenter mouseleave', function (e) {
//
//			var elm = $('ul', this);
//			var off = elm .offset();
//			var l = off.left;
//			var w = elm.width();
//			var docH = $(window).height();
//			var docW = $(window).width();
//
//			var isEntirelyVisible = (l+ w <= docW);
//			         
//			if ( ! isEntirelyVisible ) {
//				$(this).addClass('edge');
//			} else {
//				$(this).removeClass('edge');
//			}
//		});

	});
})(jQuery);