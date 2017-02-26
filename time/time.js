
var hour, sec, min, mer;

$(document).ready(function(){

sec = moment().format("ss");
setInterval(time_thick, 1000);

function time_thick(){
  hour = moment().format("hh");
  min = moment().format("mm");
  mer = moment().format("A");
  if (hour < 10) {
  $("#time.time").text("0" + hour + ":" + min + " " + mer);
  }else{
  $("#time.time").text(moment().format("hh:mm A"));
  }
  return hour;
}

//Date Update every hour to make sure it will display on real time :)
function date_thick(){
  $(".date").html(moment().format("dddd MMMM DD, YYYY"));
}
date_thick();
setInterval(date_thick, 60000);

change_greet(); //Start Greet
setInterval(change_greet, 1800000);
function change_greet(){
  //Greetings
  hour  = moment().format("hh");
  mer = moment().format("A");
  console.log(hour);
  if(hour >= 1 && hour < 6 && mer == "AM"){
  var randomNumber = Math.floor(Math.random()*config.greets.early.length);
  $(".greet").text(config.greets.early[randomNumber]);
  }
  else if (hour > 6 && hour < 12 && mer == "AM") {
  var randomNumber = Math.floor(Math.random()*config.greets.day.length);
  $(".greet").text(config.greets.day[randomNumber]);
  }
  else if (( hour == 12 || hour <= 5 ) && mer == 'PM') {
  var randomNumber = Math.floor(Math.random()*config.greets.afternoon.length);
  $(".greet").text(config.greets.afternoon[randomNumber]);
  }
  else if (hour >= 6 && mer == "PM") {
  var randomNumber = Math.floor(Math.random()*config.greets.eve.length);
  $(".greet").text(config.greets.eve[randomNumber]);
  }
  else if (hour == 12  && mer == "AM") {
  var randomNumber = Math.floor(Math.random()*config.greets.mn.length);
  $(".greet").text(config.greets.mn[randomNumber]);
  }
}

});