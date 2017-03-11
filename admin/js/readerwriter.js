

	$.extend({
	    giriReader: function(url) {
	        var result = null;
	        $.ajax({
	            url: url,
	            type: 'post',
	            async: false,
	            cache: false,
	            success: function(data) {
	                result = data;
	            }
	        });
	       return result;
	    }
	});

	$.extend({
	    giriWriter: function(fn, to_write) {
	        var result = null;
	        $.ajax({
	            url: 'js/writer.php',
	            type: 'post',
	            data: {
	            	file_name: fn,
	            	dataw: to_write
	            },
	            async: false,
	            cache: false,
	            success: function() {
	            }
	        });
	    }
	});