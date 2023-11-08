/**
	events solutions
*/

$(function() {
	//Pre-requisites
	//DO NOT MODIFY
	$('#tweetButton').on('click', function() {
		var statusText = $('#newStatus').val();
		
		var status = $('.status:first').clone();
		
		status.find('.nickname').html('Marakana');
		status.find('.photo').attr('src','images/marakana.png');
		status.find('.text').html(statusText);
		status.find('.timestamp').html('seconds ago');

		status.prependTo('#statuses');
		
	});
	
	// Lab Section
	// Lab 1
	$('#statuses').on('click', 'img.delete', function(){
		console.log('clicked')
		$(this).parent().remove();
	});

	
	// Lab 2
	let letterCounterV1 = function() {
		let count = $(this).val().length;
		let remaining = 140 - count;
		$('#counter').text(remaining);
	};
	
	$('#newStatus').keydown(letterCounterV1);
	$('#newStatus').keyup(letterCounterV1);
	$('#newStatus').keypress(letterCounterV1);

	// Lab 3
	var letterCounterV2 = function(event) {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);
		
		if( remaining < 0) {
			$('#tweetButton').attr('disabled','disabled');
		} else if( remaining <= 10) {
			$('#tweetButton').removeAttr('disabled');				
			$('#counter').addClass('danger');
		} else {
			$('#tweetButton').removeAttr('disabled');				
			$('#counter').removeClass('danger');			
		}
	};
	$('#newStatus').keydown(letterCounterV2);
	$('#newStatus').keyup(letterCounterV2);
	$('#newStatus').keypress(letterCounterV2);

	// Lab 4
	let hint = 'Enter your 140 character status update.';
	$('#newStatus').on('focus' ,  function() {
		if( $(this).val() === hint ) {
			$(this).val('');	
		}
	});
	$('#newStatus').on('blur',  function() {
		if( $(this).val() === '' ) {
			$(this).val(hint);	
		}
	});

	
});