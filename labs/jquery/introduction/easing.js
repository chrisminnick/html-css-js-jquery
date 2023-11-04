$(document).ready(function() {
	//Bind click events to li level1
	$('.menu-li1').toggle(function() {
		$(this).next('.menu-ul1').slideDown('slow','easeOutBounce');
	},
	function() {
		$(this).next('.menu-ul1').slideUp('slow','easeOutBounce');
	});
});