<?php 
include_once('../functions.php');
date_default_timezone_set("Asia/Manila");
$fileName = date("Y-m-d");
$full_fn = 'usage/'. $fileName . '-fioUsage.txt';

if (file_exists($full_fn)) :
    echo 'exists';	
else :   
    write_settings($full_fn, '0');
    echo 'success';
endif;  
?>