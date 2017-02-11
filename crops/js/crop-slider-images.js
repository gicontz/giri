$(document).ready(function(){
      for(var i = 0; i < split_crops.length; i++){     
      	$("#crop-slider").append('<div><img src="crops/images/' + split_crops[i].trim() + '.jpg"></div>');
      }
});