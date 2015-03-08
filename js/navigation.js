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

				cssmenu.find('li ul').parent().addClass('has-sub');

				multiTg = function() {
					cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
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
					if ($( window ).width() > 768) {
						cssmenu.find('ul').show();
					}

					if ($(window).width() <= 768) {
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

});
})(jQuery);