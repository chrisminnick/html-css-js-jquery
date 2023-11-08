$(function() {
	//Pre-requisites
	//DO NOT MODIFY
	$('#tweetButton').click( function() {
		var statusText = $('#newStatus').val();
		
		var status = $('.status:first').clone();
		
		status.find('.nickname').html('Marakana');
		status.find('.photo').attr('src','images/marakana.png');
		status.find('.text').html(statusText);
		status.find('.timestamp').html('seconds ago');

		status.prependTo('#statuses');
		
	});
	
	// Labs start here
	// Lab 1

	// Lab 2

	// Lab 3

	// Lab 4

	// Lab 5

	// Lab 6

	// Lab 7
});