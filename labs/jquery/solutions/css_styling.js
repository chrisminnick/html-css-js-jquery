/**
	css_styling solutions
*/

$(document).ready(function() {
	// Lab 1
	$('.meta').css('font-size', '0.8em');

	// Lab 2
	$('li.status:even').css('background-color', '#efefef');

	// Lab 3
	$('li.status:even').addClass('zebra');
	
	// Lab 4
	$('li.status').hover( function() {
		$(this).addClass('zebraOver');
	},function() {
		$(this).removeClass('zebraOver');
	});
});
