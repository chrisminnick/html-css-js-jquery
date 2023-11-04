$(document).ready(function() {
	$('#photos').cycle({ 
	  fx: 'scrollHorz',
	  speedIn: 2500,
	  speedOut: 500,
	  timeout: 0,
	  next: '#photos'
	});
});
