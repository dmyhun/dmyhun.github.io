$(function(){
	$('.sidenav').sidenav();      
	$('.parallax').parallax();
	$('.about-photos__slider').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    arrows:false
	});

	$('.review-list').slick({
	slidesToShow: 1,
  	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows:false,
	dots: true
});
	$('.modal').modal();

	$('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
	});
	return false;
});

function initMap() {
	var coorditates_center = {lat: 46.476642, lng: 30.729925},
	coorditates_fs = {lat: 46.480377, lng: 30.756392},
	coorditates_rio = {lat: 46.471091, lng: 30.743519},

	markerImg_fs = 'img/marker_fs.png',
	markerImg_rio = 'img/marker_rio.png',

	map = new google.maps.Map(document.getElementById('map'), {
		center: coorditates_center,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false,

	});

	marker_fs = new google.maps.Marker({
		position: coorditates_fs,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: markerImg_fs
	});

	marker_rio = new google.maps.Marker({
		position: coorditates_rio,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: markerImg_rio
	});
}
   


