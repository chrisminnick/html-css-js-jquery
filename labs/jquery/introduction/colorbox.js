$(document).ready(function() {
	$('a[rel="foodpic"]').colorbox({ 
		transition: 'fade',
		speed: 500,
		current: "{current} of {total} food pictures"
	});
});