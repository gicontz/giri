<?php
include_once('../functions.php');
$num_req = $_POST['nq'];
date_default_timezone_set("Asia/Manila");
$fileName = date("Y-m-d");
write_settings('usage/'. $fileName . '-fioUsage.txt', $num_req);
echo $num_req;