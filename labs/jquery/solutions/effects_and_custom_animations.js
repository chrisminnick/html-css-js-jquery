/**
	effects_and_custom_animations solutions
*/

$(function() {
	// Pre-requisites
	// DO NOT MODIFY
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
	
	$('html body').delegate('li.status', 'mouseover', function() {
		$('li.status').mouseover( function() {
			$(this).addClass('zebraOver');
		});
		$('li.status').mouseout( function() {
			$(this).removeClass('zebraOver');
		});
	});


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

	// Labs starts here
	// Lab 1
	$('#top').click( function() {
		$('html, body').animate( { scrollTop: 0}, 'slow');
	});

	// Lab 2
	// $('#toggleButton').click( function() {
	// 		$('#header').hide();
	// 		$('#footer').hide();
	// 	});

	// Lab 3
	// $('#toggleButton').click( function() {
	// 		$('#header').toggle();
	// 		$('#footer').toggle();
	// 		
	// 		if ( $('#header').is(':visible') ) {
	// 			$('#toggleButton').val('Hide');
	// 		} else {
	// 			$('#toggleButton').val('Show');
	// 		}		
	// 	});

	// Lab 4
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

	// Lab 5
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
	});

	// Lab 6
	$('#statuses').delegate('img.delete', 'click', function(){
		$(this).parent().fadeOut('slow', function() {
			$(this).remove();
		});
	});

	// Lab 7
	$('#tweetCounter').hide();
	$('#newStatus').css('height', '37px');
	$('#newStatus').one('click',function() {
		$('#newStatus').animate({
				height: '56px'
		});
		$('#tweetCounter').slideDown('slow', function() {
			$('#tweetCounter').show();	
		});
	});

	// Lab 8
	$(window).scroll(function() {
		$('#sidemenu').stop().animate({
			top: $(document).scrollTop()
		},'slow');
	});

	// Lab 9
	//First hide all element but first
	$('#sidemenu .menu_li1:not(:first)').next('ul').hide();
	
	// Remove borders for the last li of each .menu_ul2
	$('.menu_ul2').each(function() {
		$(this).find('li:last').css('border','none');
	});
	
	// When clicking on an li1
	$('#sidemenu .menu_li1').click(function() {
		//Get the child ul
		var $child_ul = $(this).next('ul');
		// Check if that ul is hidden
		if ($child_ul.is(':hidden')) {
			// If this ul is hidden
			// Find other that are visible and hide them
			$('.menu_ul2:visible').slideUp('slow');
			//Show the hidden one
			$child_ul.slideDown('slow');
		}
		return false;
	});
});