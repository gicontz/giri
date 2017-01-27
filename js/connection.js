$(document).ready(function($){
	
    var text = "Waiting for Connection.";
var i = setInterval(function(){		
		$(".wait").text(text + ".");	
		text = $(".wait").text();
		if (text=="Waiting for Connection...") {
			text = "Waiting for Connection"
		}	
}, 500);
});