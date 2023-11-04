$(document).ready(function() {
	$('#footer a').click(function(e) {
		var url=$(this).attr('href');
		$('#section').load(url);
		e.preventDefault();
	});
});