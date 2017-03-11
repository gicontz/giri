<?php

date_default_timezone_set("Asia/Manila");
$fileName = date("Y-m-d");
$fulldata = $_POST['forecastURL'];
$curl = curl_init();
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt_array($curl, array(
  CURLOPT_URL => $fulldata,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {

  $weather_data = ($response);
  // save $weather_data to local file
  $file = 'full_bckups/('. $fileName .') forecastio_full.json';

  // Write the contents to the file
  file_put_contents($file, $weather_data);
}