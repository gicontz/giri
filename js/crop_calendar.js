
$(document).ready(function(){

var cropname = {};
			cropname.jan = giri_crop.January[0].crop.split(',');
			cropname.feb = giri_crop.February[0].crop.split(',');
			cropname.mar = giri_crop.March[0].crop.split(',');
			cropname.apr = giri_crop.April[0].crop.split(',');
			cropname.may = giri_crop.May[0].crop.split(',');
			cropname.jun = giri_crop.June[0].crop.split(',');
			cropname.jul = giri_crop.July[0].crop.split(',');
			cropname.aug = giri_crop.August[0].crop.split(',');
			cropname.sep = giri_crop.September[0].crop.split(',');
			cropname.oct = giri_crop.October[0].crop.split(',');
			cropname.nov = giri_crop.November[0].crop.split(',');
			cropname.dec = giri_crop.December[0].crop.split(',');
			display_image_monthlycrops(cropname.jan, "1");		
			display_image_monthlycrops(cropname.feb, "2");	
			display_image_monthlycrops(cropname.mar, "3");	
			display_image_monthlycrops(cropname.apr, "4");	
			display_image_monthlycrops(cropname.may, "5");	
			display_image_monthlycrops(cropname.jun, "6");	
			display_image_monthlycrops(cropname.jul, "7");	
			display_image_monthlycrops(cropname.aug, "8");	
			display_image_monthlycrops(cropname.sep, "9");	
			display_image_monthlycrops(cropname.oct, "10");	
			display_image_monthlycrops(cropname.nov, "11");	
			display_image_monthlycrops(cropname.dec, "12");		

function display_image_monthlycrops(crop_array, pos){
		var index = 0;
			$("#crop_calender #grid .uc-container:nth-of-type("+ pos +") .uc-final-content").prepend('<div class="img-slider"></div>');
	if(crop_array[0] == ""){
		$("#crop_calender #grid .uc-container:nth-of-type("+ pos +") .uc-final-content .img-slider").prepend('<span>No Crops for this Month</span>');		
	}
	else{	
		while(index <= crop_array.length-1){
			var crop_info = $.giriReader('crops/data/'+ crop_array[index].trim() +'.txt');
			$("#crop_calender #grid .uc-container:nth-of-type("+ pos +") .uc-final-content .img-slider").prepend('<img src="crops/images/'+ crop_array[index].trim() +'.jpg" title="'+ crop_info +'">');		
			index++;
		}
	}
}

});
