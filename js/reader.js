
function readTextFile(file){
	var the_text;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                the_text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return the_text;
}

$.extend({
        giriReader: function(url) {
            var result = null;
            $.ajax({
                url: url,
                type: 'post',
                async: false,
                cache: false,
                success: function(data) {
                    result = data;
                }
            });
           return result;
        }
});

function forecast_usage(nq){
$.ajax({
    type: "post",
    url: 'admin/forecast-dump/usage-manager.php',
    cache: false,
    data: { 
       nq: num_req
     },
    success: function(data){        
        console.log(data);
    }
});
}

function initial_forecast_usage(){
$.ajax({
    type: "post",
    url: 'admin/forecast-dump/create-usage-report.php',
    cache: false,
    success: function(data){        
        console.log(data);
    }
});
}

function forecast_dump(rep){
$.ajax({
    type: "post",    
    url: 'admin/forecast-dump/maker.php',
    cache: false,
    data: {
        dump_report: rep
    },
    success: function(data){        
        console.log(data);
    }
});   
}