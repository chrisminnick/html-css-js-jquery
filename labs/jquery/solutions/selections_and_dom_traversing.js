/**
	selections_and_dom_traversing solutions
*/

$(document).ready(function() {
	// Lab 1
	//1st way
	$('.status:not(:first)').css('backgroundColor','yellow');
	//2nd way
	$('.status:gt(0)').css('backgroundColor','yellow');

	// Lab 2
	$(':button').css('backgroundColor','yellow');

	// Lab 3
	//1st way
	$('a[href*="bit.ly"]').css('backgroundColor','red');
	//2nd way
	$('a[href^="http://bit.ly"]').css('backgroundColor','red');

	// Lab 4
	alert('There are currently ' + $('div').length + ' div elements on the page');

	// Lab 5
	$('.status').find('.photo').css('borderWidth','1px')
                                   .css('borderColor','black')
                                   .css('borderStyle','dashed');
});

