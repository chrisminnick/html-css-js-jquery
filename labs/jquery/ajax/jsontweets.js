$(document).ready(function() {
	var twitterURL="http://search.twitter.com/search.json?q=";
	
	$('#btn_search').click(function() {
		//Get the term to search
		var searchRecipe=$('#txt_recipe_name').val();
		//Clean the div tweetsresult
		$('#tweetsresult').children().remove();
		
		$.getJSON( "http://search.twitter.com/search.json?q=" + searchRecipe + "&callback=?", function(data) {
		    $.each(data.results, function() {
		      $('<div></div>')
		        .hide()
		        .append('<img src="' + this.profile_image_url + '" />' )
		        .append('<span><a href="http://www.twitter.com/' 
		          + this.from_user + '">' + this.from_user 
		          + '</a>' + this.text + '</span>') 
		        .appendTo('#tweetsresult')
		        .fadeIn();
		    });
		});
	});
});