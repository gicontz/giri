<script type="text/javascript">
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

//Preserved for Time API (Deprecated)
     // switch(month){
     //    case '01' || '1':
     //    month = monthnames[0];
     //    break;

     //    case '02' || '2':
     //    month = monthnames[1];
     //    break;

     //    case '03' || '3':
     //    month = monthnames[2];
     //    break;

     //    case '04' || '4':
     //    month = monthnames[3];
     //    break;

     //    case '05' || '5':
     //    month = monthnames[4];
     //    break;

     //    case '06' || '6':
     //    month = monthnames[5];
     //    break;

     //    case '07' || '7':
     //    month = monthnames[6];
     //    break;

     //    case '08' || '8':
     //    month = monthnames[7];
     //    break;

     //    case '09' || '9':
     //    month = monthnames[8];
     //    break;

     //    case '10':
     //    month = monthnames[9];
     //    break;

     //    case '11':
     //    month = monthnames[10];
     //    break;

     //    case '12':
     //    month = monthnames[11];
     //    break;

     //    default:
     //    month = "";
     //    break;
     // }
    </script>
<!-- <script type="text/javascript" src="http://www.timeapi.org/8/now.json?callback=myCallback&\a%20\m%20\d%20\r%20\Z%20\Y"></script> -->