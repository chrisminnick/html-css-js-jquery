/**
	jquery ui solutions
*/

// Pre-requisites
// DO NOT MODIFY
// Counter
$(function() {
	var letterCounter = function(event) {
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
	$('#newStatus').keydown(letterCounter);
	$('#newStatus').keyup(letterCounter);
	$('#newStatus').keypress(letterCounter);
});

//Hint
$(function() {
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
});

// Slide down status
$(function() {
	$('#tweetCounter').hide();
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click',function() {
		$('#newStatus').animate(
			{
				height: '56px'
			}
		);
		$('#tweetCounter').slideDown('slow', function() {
		 $('#tweetCounter').show();	
		});
	});
});

// Show/hide header footer
$(function() {
	$('#toggleButton').click( function() {
		$('#footer').toggle('slow');
		$('#header').toggle('slow', function() {
			if ( $('#header').is(':visible') ) {
				$('#toggleButton').val('Hide');
			} else {
				$('#toggleButton').val('Show');
			}
		});
	});
});

// Hover tweets
$('html body').delegate('li.status', 'mouseover', function() {
	$('li.status').mouseover( function() {
		$(this).addClass('zebraOver');
	});
	$('li.status').mouseout( function() {
		$(this).removeClass('zebraOver');
	});
});

// Remove tweets from DOM when click on cross
$('#statuses').delegate('img.delete', 'click', function(){
	$(this).parent().remove();
});

// Scroll Menu
$(document).ready(function() {
	$(window).scroll(function() {
		$('#sidemenu').stop().animate({
			top: $(document).scrollTop()
		},'slow');
	});
});

// Post to Server
$(function() {

	$('#tweetButton').click( function() {
		var statusText = $('#newStatus').val();
		
		var status = 
		$('<li class="status">' +
      '<img class="icon delete" src="images/icon_delete.png" alt="delete" />' +
      '<div class="data">' +
        '<span class="user"><a href="#" class="url">' +
          '<img width="48" height="48" src="images/marakana.png" alt="" class="photo">' +
          '<span class="nickname">Marakana</span></a></span>' +
          '<span class="text">' + statusText +
          '</span>' +
      '</div>' +
      '<div class="meta">' +
        '<span class="timestamp">seconds ago</span> ' +
        '<span class="source">from web</span>' +
      '</div>' +
    '</li>');
			
		status.hide().prependTo('#statuses').slideDown('slow').fadeOut('fast').fadeIn('fast');

		// Post to server
		console.log("about to send via ajax");
		$.ajax({
			type: 'POST',
			url: 'proxy.php/api/statuses/update.json',
			dataType: 'jsonp',
			data: {
				status: statusText
			},
			username: 'student',
			password: 'password',
			success: function(data) {
				console.log("success");
			},
			error: function(data) {
				console.log("error: "+data);
			}
		});
		
	});
});

//START YOUR LABS BELOW

//LAB 1

//LAB 2

//LAB 3

//LAB 4

//LAB 5

//LAB 6


