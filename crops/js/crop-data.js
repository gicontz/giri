/***
Get Crop Dta
Images and Description
*/	


/*Import JS needed*/

function is_end_of_the_month(){
	$.ajax({
	url: "http://localhost/giri/crops/monthday.php",
	success: function(data){
		if(data==="YES"){
			$(".notif_bar").removeClass("hide");
			$(".notif_bar .head-msg").text("IT'S THE END OF THE MONTH!");
			$(".notif_bar .msg").text("You can now post the crop calendar for the month");
			$(".notif_bar .notif-icon").addClass("fa-exclamation");
            gs.endofMonth();
		}
	 }
	}, 500);
}


function weather_image(){
		setTimeout(function(){
		 	$(".shutter").addClass("flash");
		 	gs.shutter();
	 	}, 1000);
	 	setTimeout(function(){
	 		$(".shutter").removeClass("flash");
	 		$(".uploading").addClass("load");
	 	}, 1500);

	 	setTimeout(function(){
$.ajax({
	url: "http://localhost/giri/facebook/screenshot.php",
	success: function(){
		postFB();
	 }
	}, 500);
});
}
		 var array_crops = current_crop;		 
		 var split_crops = array_crops.split(",");

function postFB(){

	 $(".uploading img").addClass("visible");
     var st = current_crop;
		 var crops = st.split(",");
		 var cropdesc = Array(crops.length);
		 var cropphoto = Array(crops.length);
		 for (var i = 0; i < crops.length; i++) {
		 	cropdesc[i]= $.ajax({
                    url: "http://localhost/giri/crops/data/" + crops[i].trim() + ".txt",
                    async: false
                 }).responseText;
		 	cropphoto[i] = "http://localhost/giri/crops/images/" + crops[i].trim() + ".jpg";
		 }
crops = crops.join(",");
cropdesc = cropdesc.join("@");
cropphoto = cropphoto.join(",");

$.ajax({
	type: "post",
	url: "http://localhost/giri/facebook/fb.php",
	data: { 
		cropnames: crops,
		cropdescr: cropdesc,
		cropphotos: cropphoto,
		wetherdesc: weather_status
	 },
	success: function(data){	 	
		if (data=="Done") {
	 $(".uploading img").removeClass("visible");
			gs.postDone();
	$(".uploading .motionload").text("Posted in Facebook");		
		}
		else{
	 $(".uploading img").removeClass("visible");
			gs.postErr();
	 $(".uploading .motionload").append("Error Try Again!");
	}
	 setTimeout(function(){
	 $(".uploading").removeClass("load");
	$(".uploading .motionload").text("");}, 3000);
	 }
});
}

