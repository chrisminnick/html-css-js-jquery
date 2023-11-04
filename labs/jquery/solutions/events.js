/**
	events solutions
*/

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
	
	// Lab Section
	// Lab 1
	$('#statuses').delegate('img.delete', 'click', function(){
		$(this).parent().remove();
	});

	// Lab 2
	$('#tweetCounter').hide();
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click', function() {
		$('#tweetCounter').show();
		$('#newStatus').css('height', '56px');
	});

	// Lab 3
	var letterCounterV1 = function() {
		var count = $(this).val().length;
		var remaining = 140 - count;
		$('#counter').text(remaining);
	};
	
	$('#newStatus').keydown(letterCounterV1);
	$('#newStatus').keyup(letterCounterV1);
	$('#newStatus').keypress(letterCounterV1);

	// Lab 4
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

	// Lab 5
	$(window).resize( function() {
		if( $('body').width() < 500 ) {
			$('#wrap').css('min-width','300px');
			$('#content').css('width', '85%');
		} else {
			$('#wrap').css('min-width','500px');
			$('#content').css('width', '66%');
		}
	});

	// Lab 6
	var hint = 'Enter your 140 character status update.';
	$('#newStatus').focusin( function() {
		if( $(this).val() === hint ) {
			$(this).val('');	
		}
	});
	$('#newStatus').blur( function() {
		if( $(this).val() === '' ) {
			$(this).val(hint);	
		}
	});

	// Lab 7
	$('html body').delegate('li.status', 'mouseover', function() {
		$('li.status').mouseover( function() {
			$(this).addClass('zebraOver');
		});
		$('li.status').mouseout( function() {
			$(this).removeClass('zebraOver');
		});
	});
});