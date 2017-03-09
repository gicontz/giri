
var the_fd = new Date();
var theM = (the_fd.getMonth()+1) < 10 ? "0" + (the_fd.getMonth()+1) : (the_fd.getMonth()+1);
var theD = the_fd.getDate() < 10 ? "0" + the_fd.getDate() : the_fd.getDate();
the_fd = the_fd.getFullYear() + "-" + theM + "-" + theD;

$.giriWriter('../admin/forecast-dump/date-view.giri', the_fd);
show_data($.giriReader('../admin/forecast-dump/date-view.giri'));

function show_data(the_fd){

var newdata = $.giriReader('../admin/forecast-dump/'+ the_fd +'/forecast_dump.txt');
var newdataSet = newdata.split(",");
var dataSet = [
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '']
];

var i = 0;
var j = 0;
var temp = i;
for( i = 0; i <= 35; i++){  
        dataSet[i][0] = newdataSet[j];
        j++;
        dataSet[i][1] = newdataSet[j];
        dataSet[i][2] = the_fd;
        j++;
    //dataSet[0][0] = newdataSet[0];
}

$(document).ready(function() {
    $('#forecsatReport').DataTable( {
        data: dataSet,
        columns: [
            { title: "Hours from Starting Time" },
            { title: "Wind Speed" },
            { title: "Date" }
        ]
    } );
} );
}