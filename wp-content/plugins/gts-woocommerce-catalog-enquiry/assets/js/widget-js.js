/*Form Action Handling*/
jQuery(document).ready(function($) {
	//Clear Full Cart
	$("body").on("click",'.gts-clear-list', function(event){
		
		event.preventDefault();
				
		var data = {
			'action'		: 'widget_clear_action',
			'clear_list'  	: 'yes'
		};

		$.post(ajaxurl, data, function(response) {
			var obj = jQuery.parseJSON( response );
			if( obj.result === 1 ){
				$('.gts-clr-status').append("<span class='status-success'>" +obj.result_msg+ "</span>");
				window.location.reload(true);
			}
			if( obj.result === 2 ){
				$('.gts-clr-status').append("<span class='status-error2'>" +obj.result_msg+ "</span>");
			}	
		});//End of Response

	});//End of Clear full Cart
	
	//Clear Cart Item
	$("body").on("click",'.remove.enq-item-remove', function(event){
		
		event.preventDefault();
				
		var itemId = $(this).attr('data-id');
		var location = $(window).location;
		
		var data = {
			'action'		: 'widget_clear_item_action',
			'clear_list'  	: 'yes',
			'item_id'		: itemId,
			'redirect'		: location
		};

		$.post(ajaxurl, data, function(response) {
			var obj = jQuery.parseJSON( response );
			if( obj.result === 1 ){
				window.location.reload(true);
			}
			if( obj.result === 2 ){
				alert(obj.result_msg);
			}	
		});//End of Response

	});//End of Clear Cart Item
	
	//Clear Form Item
	$("body").on("click",'.cart_list_form .remove.enq-item-remove', function(event){
		
		event.preventDefault();
				
		var itemId = $(this).attr('data-id');
		var location = $(window).location;
		
		var data = {
			'action'		: 'form_clear_item_action',
			'clear_list'  	: 'yes',
			'item_id'		: itemId,
			'redirect'		: location
		};

		$.post(ajaxurl, data, function(response) {
			var obj = jQuery.parseJSON( response );
			if( obj.result === 1 ){
				window.location.reload(true);
			}
			if( obj.result === 2 ){
				alert(obj.result_msg);
			}	
		});//End of Response

	});//End of Clear Form Items

}); //End of document.ready