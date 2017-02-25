$(document).ready(function(){

     var scrolled = 0;

$(document).ready(function(){


// how many milliseconds is a long press?
var longpress = 1000;
var ondown = false;
// holds the start time
var start;
var incrstart;
var dragging = false;

$( "#brgy_drag" ).on( 'mousedown', function(e) {
  ondown = true;
  start = new Date().getTime();
  setInterval(function(){
  if (ondown && !dragging) {
    incrstart = new Date().getTime();
    if (incrstart >= (start + longpress)) {
      $(".trash").addClass("visible");
      $(".trash").removeClass("hidden");
    }
  }
}, 100);
});

$( "#brgy_drag" ).on( 'mouseleave', function( e ) {
  start = 0;
} );

$( "#brgy_drag" ).on( 'mouseup', function( e ) {
  ondown = false;
  $(".trash").addClass("hidden");
  $(".trash").removeClass("visible");
});


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
        dragging = false;
    }
}

function elment_drag(el){
    dragging = true;
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

});
});