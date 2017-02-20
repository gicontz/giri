var time= "";
var date = "";
var year = "";
var month = "";
var hour = "";
var min = "";
var day = "";
var dname = "";
var mer = "";
var sec= "";

var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var thedate;

        setInterval(getCurrentDate, 10);
        function getCurrentDate(){
            var newDate = new Date();
            month = newDate.getMonth();              
            month = monthnames[month];
            day = newDate.getDate();
            year = newDate.getFullYear(); 
            dname = newDate.getDay();
            dname = daynames[dname];  
            $(".date").html('<span class="dayName">' + dname + "</span>, <span class='monthName'>" + month + '</span><span class="dayNum"> ' + day + "</span>, <span class='yrNum'>" + year + "</span>");      
        }

        thedate = new Date();
            month = thedate.getMonth();              
            month = monthnames[month];
            day = thedate.getDate();
            year = thedate.getFullYear(); 
            dname = thedate.getDay(); 
            dname = daynames[dname]; 
            time = thedate.toLocaleTimeString();
            if (time.length == 11) {
                hour = time.slice(0,2);
                min = time.slice(3,5);
                sec = time.slice(6,8);            
                mer = time.slice(9,11);
                mer = mer.toString();                
            }else if (time.length == 10) {                
                hour = time.slice(0,1);
                min = time.slice(2,4);
                sec = time.slice(5,7);            
                mer = time.slice(8,10);
                mer = mer.toString();  
            }