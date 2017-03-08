	var admin_menu = {};	
	admin_menu.set_active_menu = function(){
		var thepage = $("body").attr('class');
		if(thepage == 'dashboard'){
			$(".navigation li:nth-child(1)").addClass("active");
		}
		else if(thepage == 'forecast'){
			$(".navigation li:nth-child(2)").addClass("active");
		}
		else if(thepage == 'facebook'){
			$(".navigation li:nth-child(3)").addClass("active");
		}
		else if(thepage == 'googlemap'){
			$(".navigation li:nth-child(4)").addClass("active");
		}
		else if(thepage == 'cropn'){
			$(".navigation li:nth-child(5)").addClass("active");
			$(".navigation li:nth-child(5) ul li:nth-child(1)").addClass("active");
		}
		else if(thepage == 'cropimg'){
			$(".navigation li:nth-child(5)").addClass("active");
			$(".navigation li:nth-child(5) ul li:nth-child(2)").addClass("active");
		}
	};

	admin_menu.readTextFile = function(file){
		var the_text;
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					the_text = rawFile.responseText;
				}
			}
		}
		rawFile.send(null);
		return the_text;
	};

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

	admin_menu.set_active_menu();
