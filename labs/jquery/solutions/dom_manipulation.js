/**
	dom_manipulation solutions
*/

$(function() {
	// Lab 1
	$('#tweetButton').click( function() {
		var status = $('#newStatus').val();
		
		$('<li class="status">' +
      '<img class="icon delete" src="images/icon_delete.png" alt="delete" />' +
      '<div class="data">' +
        '<span class="user"><a href="#" class="url">' +
          '<img width="48" height="48" src="images/marakana.png" alt="" class="photo">' +
          '<span class="nickname">Marakana</span></a></span>' +
          '<span class="text">' + status +
          '</span>' +
      '</div>' +
      '<div class="meta">' +
        '<span class="timestamp">seconds ago</span> ' +
        '<span class="source">from web</span>' +
      '</div>' +
    '</li>').prependTo('#statuses');
	});

	// Lab 2
	$('#tweetButton').click( function() {
		var statusText = $('#newStatus').val();
		
		var status = $('.status:first').clone();
		
		status.find('.nickname').html('Marakana');
		status.find('.photo').attr('src','images/marakana.png');
		status.find('.text').html(statusText);
		status.find('.timestamp').html('seconds ago');

		status.prependTo('#statuses');
		
	});

	// Lab 3
	$('img.delete').click( function() {
		$(this).parent().remove();
	});
});

