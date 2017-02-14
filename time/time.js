$(document).ready(function(){
            $(".date").html('<span class="dayName">' + dname + "</span>, <span class='monthName'>" + month + '</span><span class="dayNum"> ' + day + "</span>, <span class='yrNum'>" + year + "</span>");

            hour = parseInt(hour);
            
            if (hour < 10) {
                $("#time.time").text("0" + hour + ":" + min + " " + mer);
            }else{
                $("#time.time").text(hour + ":" + min + " " + mer);
            }


             setInterval(InternetTime, 1000);

             function InternetTime(){
              sec = parseInt(sec);
              sec += 1;

              if (hour < 10) {
                  $("#time.time").text("0" + hour + ":" + min + " " + mer);
              }else{
                  $("#time.time").text(hour + ":" + min + " " + mer);
              }
              if(sec>59){
                min = parseInt(min) + 1;
                if(min<10){
                  min = "0" + min;
                }
                sec = 0;
              }
              
              if(min>59){
                min = "00";
                hour = parseInt(hour);
                if (hour==11 && mer=="AM") {
                  hour = 12;
                  mer = "PM";
                }else if(hour==11 && mer=="PM"){
                  hour = 12;
                  mer = "AM";
                }else if (hour==12) {
                  hour = 1;
                }
                
                if(hour < 9 && hour >= 12){
                  hour++;
                  hour = "0" + hour;
                }else if (hour >= 9 && hour < 12){
                  hour++;
                }
              }      

              if (hour < 10) {
                  $("#time.time").text("0" + hour + ":" + min + " " + mer);
              }else{
                  $("#time.time").text(hour + ":" + min + " " + mer);
              }
            }   

            change_greet(); //Start Greet

            setInterval(change_greet, 1800000);

            function change_greet(){
              hour = parseInt(hour);  
              //Greetings
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