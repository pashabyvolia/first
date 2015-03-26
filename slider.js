jQuery(document).ready(function(){
	function htmSlider(){
		/* Зададим следующие переменные */

		/* обертка слайдера */
		var slideWrap = jQuery('.slide-wrap');
		/* ссылки на предудыщий иследующий слайд */
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');

		var playLink = jQuery('.auto');
		
		/* ширина слайда с отступами */
		var slideWidth = jQuery('.slide-item').outerWidth();
		
		/* смещение слайдера */
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		/* Клик по ссылке на следующий слайд */
		nextLink.click(function(){
			if( nextLink.attr('name') == 'next' ) {
			
				nextLink.removeAttr('name');
				
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});
				
				setTimeout(function(){ nextLink.attr('name','next') }, 600);
			}
		});

		/* Клик по ссылке на предыдующий слайд */
		prevLink.click(function(){
			if( prevLink.attr('name') == 'prev' ) {
			
				prevLink.removeAttr('name');
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

				setTimeout(function(){ prevLink.attr('name','prev') }, 600);
			}
		});

	}

	/* иницилизируем функцию слайдера */
	htmSlider();
});


jQuery(document).ready(function(){
	function htmSlider1(){
		/* Зададим следующие переменные */

		/* обертка слайдера */
		var slideWrap = jQuery('.slide-wrap1');
		/* ссылки на предудыщий иследующий слайд */
		var nextLink = jQuery('.next-slide1');
		var prevLink = jQuery('.prev-slide1');

		
		/* ширина слайда с отступами */
		var slideWidth = jQuery('.slide-item1').outerWidth();
		
		/* смещение слайдера */
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		/* Клик по ссылке на следующий слайд */
		nextLink.click(function(){
			if( nextLink.attr('name') == 'next' ) {
			
				nextLink.removeAttr('name');
				
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item1:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});
				
				setTimeout(function(){ nextLink.attr('name','next') }, 600);
			}
		});

		/* Клик по ссылке на предыдующий слайд */
		prevLink.click(function(){
			if( prevLink.attr('name') == 'prev' ) {
			
				prevLink.removeAttr('name');
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item1:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

				setTimeout(function(){ prevLink.attr('name','prev') }, 600);
			}
		});

	}

	/* иницилизируем функцию слайдера */
	htmSlider1();
});


