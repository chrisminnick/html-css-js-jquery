$(document).ready(function() {
	$('#footer a[href="about.html"]').click(function(e) {
		var url=$(this).attr('href') + " #about";
		$('#section').load(url);
		e.preventDefault();
	});
	$('#footer a[href="contact.html"]').click(function(e) {
		var url=$(this).attr('href') + " #contact";
		$('#section').load(url);
		e.preventDefault();
	});
});