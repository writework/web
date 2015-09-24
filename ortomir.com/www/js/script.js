$(document).ready(function(){
	$('#slider').owlCarousel({
		pagination:true,
		navigation:false,
		singleItem:true,
		items:1
	});
	var i = 1;
	$('.colors').each(function(){
		$('#color'+i).owlCarousel({
			pagination:false,
			navigation:true,
			items:3
		});
		i++;
	});
	$('#sizes,#col').owlCarousel({
			pagination:false,
			navigation:true,
			items:3,
			itemsTablet:[768,3]
		});
	$('.catalog .item').hover(function(){
		$(this).addClass('item_active');
	},function(){
		$(this).removeClass('item_active');
	});
	$('#partners').owlCarousel({
		pagination:false,
		navigation:true,
		items:6,
		itemsDesktopSmall:[990,4],
		itemsTablet:[768,3]
	});
	$('.nav span').click(function(){
		if($('.nav ul.nav_menu').hasClass('active')) {
			$('.nav ul.nav_menu').hide();
			$('.nav ul.nav_menu').removeClass('active');
		}
		else {
			$('.nav ul.nav_menu').addClass('active');
			$('.nav ul.nav_menu').show();
		}
	});
	$('.nav ul.nav_menu>li>a').click(function(){
		if($(this).next('ul').length > 0) {
			$('.nav ul.nav_menu>li').removeClass('active');
			$(this).parent('li').addClass('active');
			return false;
		}
	});
	$("#range").slider({
         animate: true, // Анимация. true - включить. false - выключить.
         min: 1, // Минимальный интервал диапазона.
         max: 100, // Максимальный интервал диапазона.
         range: true, // Включение двойного ползунка. Если место true поставить 'min', то будет один ползунок.
         step: 1, // Шаг ползунка.
         values: [15, 70], // Значения для ползунков. Для первого и второго.
         slide: function(event, ui) { // Действия которые будут происходить по перетаскивания ползунка.
         	$( "#min" ).val(ui.values[ 0 ]); // Значение первого ползунка.
         	$( "#max" ).val(ui.values[ 1 ]); // Значение второго ползунка.
         	var first = $('.ui-slider-range').next('.ui-slider-handle');
         	var left = parseFloat($('.ui-slider-range').next('.ui-slider-handle').css('left'));
			$('.left_range').css('left',left-29+'px');
			$('.left_range').html(ui.values[ 0 ]);
			$('.right_range').html(ui.values[ 1 ]);
			var right = parseFloat(first.next('.ui-slider-handle').css('left'));
			$('.right_range').css('left',right-72+'px');
         },
          create: start()
	});
	$('.tab_header a').click(function(){
		var tab = $(this).attr('href');
		$('.tb').hide();
		$(tab).show();
		$('.tab_header a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.filter input[type=radio],.filter input[type=checkbox]').styler();
});
function start() {
	setTimeout(function(){
		var first = $('.ui-slider-range').next('.ui-slider-handle');
		var left = parseFloat($('.ui-slider-range').next('.ui-slider-handle').css('left'));
		$('.left_range').css('left',left-29+'px');

		var right = parseFloat(first.next('.ui-slider-handle').css('left'));
		$('.right_range').css('left',right-72+'px');
	},150);
}