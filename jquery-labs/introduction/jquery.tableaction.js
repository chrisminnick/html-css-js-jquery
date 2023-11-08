(function( $ ){
	$.fn.addRemoveAction = function() {
		//Get the header row
		var $headerRow = this.find('tr:first');
		//Get the data row
		var $dataRows = this.find('tr:not(:first)');
		//Append the action header
		$('<th>Action</th>').appendTo($headerRow);
		//For each data row append an cell containing a button that is able to remove the row
		$dataRows.each(function() {
			$('<td><input type="button" value="remove" /></td>').appendTo($(this));
		});
		//Event delegation
		this.delegate('tr:not(:first) input:button', 'click', function(e){
			$(e.target).parent('td').parent('tr').fadeOut('slow',function() {
				$(this).remove();
			});
		});
		//Return our table
		return this;
	};
})(jQuery);