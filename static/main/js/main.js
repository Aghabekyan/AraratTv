$(function() {
	 /*$('.slider-for').waSlider({
	  'autoplay': true,
	  'speed': 5000,
	  'slidesToScroll': 1,
	  'marginsBtwnSlides': 20,
	  'waResponsive': true,
	  'arrows': true,
	  'dots': true,
	  'swipe': true,
	  'animation':'cssEase'
	});*/
	/*$('.fotorama').fotorama();*/
	/*$('.currency').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  centerMode: true,
	  focusOnSelect: false,
	  variableWidth: true
	});*/
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 45) {
			$('header').addClass('fixed');
			$('#to_top_btn').addClass('active');
		} else {
			$('header').removeClass('fixed');
			$('#to_top_btn').removeClass('active');
		}
	})

	$('#to_top_btn').click(function() {
		$('body').animate({scrollTop: 0}, 300);
	})
	$('.has-submenu>a').click(function() {
		$(this).toggleClass('active');
	})
	$('.has-submenu>a').blur(function() {
		console.log($('.submenu:hover').length);
		if (!($('.submenu:hover').length)) {
			$(this).removeClass('active');
		} else {
			$(this).focus();
		}
	})


	$('#haylur_slider').carouFredSel({
		auto: false,
		prev: '#prev2',
		next: '#next2',
		pagination: "#pager2",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}
	});


	$.simpleWeather({
	location: 'yerevan',
	woeid: '',
	unit: 'c',
	success: function(weather) {
	  console.log(weather);
	},
	error: function(error) {
	  console.log('<p>'+error+'</p>');
	}
	});



	/* setCookie */
	if ($('#make-count').length) {
		var post_id = $('#make-count').data('id');
		if (typeof getCookie(post_id) === "undefined" ) {
			var url = htmDIR + '?hitcounter';
			$.post(url, { 
				id: post_id
			});
			setCookie(post_id, 'default', 3);
		}
	}




	/* set/get cookie interface */	
	function setCookie(c_name,value,exhours) {
		var exdate=new Date();
		exdate.setHours(exdate.getHours() + exhours);
		var c_value=escape(value) + ((exhours==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
	}
	function getCookie(c_name){
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++){
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==c_name){
				return unescape(y);
			}
		}
	}




})