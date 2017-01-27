var m = setInterval(function(){		
		$.ajax({
	type: "post",
	url: "http://localhost/giri/loader.php",
	success: function(){	
			window.open('','_self').close();			
	 }
});			
}, 10000);