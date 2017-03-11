<?php
$ws_data = $_POST['dump_report'];
date_default_timezone_set("Asia/Manila");
include_once('../functions.php');
$fileName = date("Y-m-d");
if (file_exists($fileName)) :
	echo 'exists';
else :
	mkdir($fileName);	
	write_settings($fileName . '/forecast_dump.txt', $ws_data);
	echo 'success';
endif;
//write_settings()