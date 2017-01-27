$(document).ready(function(){

     var scrolled = 0;

$(document).ready(function(){

$("button.ok-btn").click(function(){
    $("#notif_drag").addClass("hidden");
});

    var getstyle = $("#brgy_drag").attr("style");    
    getstyle = getstyle.slice(getstyle.indexOf('top')+4);
    getstyle = getstyle.slice(0, getstyle.indexOf('px'));

    var draggable_el = getstyle;

function remove_element(el){
    getstyle = el.attr("style");
    getstyle = getstyle.slice(getstyle.indexOf('top')+4);
    getstyle = getstyle.slice(0, getstyle.indexOf('px'));

    draggable_el = getstyle;
    if (draggable_el < 10) {
        $(".trash").addClass("hidden");
        $(".trash").removeClass("visible");
        el.addClass("hidden");
    }
}

function elment_drag(el){
    getstyle = el.attr("style");
    getstyle = getstyle.slice(getstyle.indexOf('top')+4);
    getstyle = getstyle.slice(0, getstyle.indexOf('px'));

    draggable_el = getstyle;

    if (draggable_el < 10) {
        $(".trash").addClass("visible");
        $(".trash").removeClass("hidden");
        el.addClass("removing");
    }
    else{        
        $(".trash").addClass("hidden");
        $(".trash").removeClass("visible");
        el.removeClass("removing");
    }   
}

function is_clicked(el){
    getstyle = el.attr("style");
    if (getstyle == null || getstyle == '') {
        return false;
    }
        return true;
}

$("#brgy_drag").bind("drag", function(event){
    elment_drag($(this));
});

$("#notif_drag").bind("drag", function(event){
    elment_drag($(this));
});

$("body").bind("mouseup", function(event){
    if (is_clicked($("#notif_drag"))) {
        remove_element($("#notif_drag"));        
    }
    if (is_clicked($("#brgy_drag"))) {
    remove_element($("#brgy_drag"));        
    }
});

	if ($("body").hasClass("on_ts")) {
		$("head").append("<style> ::-webkit-scrollbar { display: none; } </style>");
	}
	var the_top = $("#brgy_drag").scrollTop();
    //Allow dragging element
	$("#brgy_drag").draggable();
    $("#notif_drag").draggable();

$("#brgy_drag .up").on("click" ,function(){
     scrolled -= 50; 
     if(the_top <= 0){
     	scrolled = 0;
     }
        $("#brgy_drag").animate({
          scrollTop:  scrolled
     });
        $(".scr_btn").css({
        	"top": "calc(-10px + "+ scrolled +"px)"
        });
   });
$("#brgy_drag .down").on("click" ,function(){
     scrolled += 50;
     if(the_top >= 300){
     	scrolled = 300;
     }
        $("#brgy_drag").animate({
          scrollTop:  scrolled
     });
    	if (scrolled < 400) {
        $(".scr_btn").css({
        	"top": "calc(-10px + "+ scrolled +"px)"
        });
    	}else{
        $(".scr_btn").css({
        	"top": "418px"
        });
    	}
     });

});
});