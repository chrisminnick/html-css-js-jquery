$(window).load(function() {
	var $image_to_crop=$('#cropsection > img').eq(0);
	var jcrop = $.Jcrop($image_to_crop,{
		setSelect: [10,10,100,100],
		minSize:[50,50]
	});
	$('#cropsection :button').click(function() {
		var selection = jcrop.tellSelect();
		alert('selected size: ' + selection.w + 'x' + selection.h);
		alert('selected at coordinates: (' + selection.x + ',' + selection.y + ')');
	});
});