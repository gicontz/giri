forecast_chart();
function forecast_chart()
{
var the_fd = new Date();
var theM = (the_fd.getMonth()+1) < 10 ? "0" + (the_fd.getMonth()+1) : (the_fd.getMonth()+1);
var theD = the_fd.getDate() < 10 ? "0" + the_fd.getDate() : the_fd.getDate();
the_fd = the_fd.getFullYear() + "-" + theM + "-" + theD;

$(function () {

    var usage = $.giriReader('forecast-dump/usage/'+ the_fd +'-fioUsage.txt');
    usage = parseInt(usage);
    var rem = 1000 - usage;
    Highcharts.chart('container', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Forecast IO API'
        },
        subtitle: {
            text: 'Request Usage'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'API Requests',
            data: [
                ['Remaining', rem],
                ['Request Usage', usage]
            ]
        }]
    });
});
}