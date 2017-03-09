<?php
$data = $_POST['dump_report'];
include_once('../functions.php');
$fileName = date("Y-m-d");
if (file_exists($fileName)) :
	echo 'exists';
else :
	mkdir($fileName);	
	write_settings($fileName . '/forecast_dump.txt', $data);
	echo 'success';
endif;
//write_settings()