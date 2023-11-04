/**
	plugins solutions
*/

$(document).ready(function() {
	// Lab 1
	$('#statuses').cycle({ 
	  fx: 'scrollDown',
	  speedIn: 500,
	  speedOut: 500,
	  timeout: 3000,
	  next: '#statuses'
	});

	// Lab 2
	$('#signup form').validate({
		rules: {
			fullname: {
				required: true
			},
			username: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 6
			},
			passconf: {
				equalTo: "#password"
			}
		},
		success: function(label) {
			label.addClass('valid');
		}
	});
});