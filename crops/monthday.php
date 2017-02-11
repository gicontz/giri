<?php
date_default_timezone_set("Asia/Singapore");
$nowdate=getdate(date("U"));

function isleapyear(){
  global $nowdate;
$year = "$nowdate[year]";
$begin = new DateTime(  $year . '-01-01');
$end = new DateTime( $year .'-03-10' );

$interval = DateInterval::createFromDateString('1 day');
$period = new DatePeriod($begin, $interval, $end);

foreach ( $period as $dt ) {

    if(($dt->format('m') === '02') && ($dt->format('d') === '29')) {
        return true;
    }
}
return false;
}

  $mday = "$nowdate[mday]";
  $mainmday = $mday;
  $mon = "$nowdate[mon]";
function month31(){
  global $mon;
  $curmon = $mon=="1" || $mon=="3" || $mon=="3" || $mon=="5" || $mon=="7" || $mon=="8" || $mon=="10"|| $mon=="12";
  if ($curmon) {
    return true;
   } 
   return false;
}

function postwithcrops(){
  global $mon, $mainmday;
  $decide_post = ($mainmday=="30" && month31()==false && $mon!="2") || ($mainmday=="31" && month31()==true && $mon!="2") || ($mainmday=="29" && $mon=="2" && isleapyear()==1) || ($mainmday=="28" && $mon=="2" && isleapyear()==0);
  if ($decide_post) {
    return "YES"; // pag katapusan magpopost kasama crops
  }
  return "NO"; // pag hindi, weather lang
  }

echo postwithcrops();
?>