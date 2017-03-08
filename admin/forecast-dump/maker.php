<?php

include_once('../functions.php');
$fileName = date("Y-m-d");
if (file_exists($fileName)) :
	echo 'exists';
else :
	mkdir($fileName);	
	?>
		<script type="text/javascript">
			$.ajax({
			  type: 'POST',
			  url: url,//url of receiver file on server
			  data: data, //your data
			  success: success, //callback when ajax request finishes
			  dataType: dataType //text/json...
			});
		</script>
	<?php
	json_decode('https://api.forecast.io/forecast/36da509268d347e6997fcb8983ced0a4/37.8267,-122.423?callback=get_forecast')	;
	echo 'success';
endif;
function get_forecast($data){
		write_settings($fileName . '/forecast_dump.txt', $data);
}
//write_settings()