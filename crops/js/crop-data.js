/***
Get Crop Dta
Images and Description
*/	

/*Import JS needed*/
function postFB(){
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
	 },
	success: function(data){
	 	alert(data);
	 }
});
}