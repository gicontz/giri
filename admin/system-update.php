<?php
$op = shell_exec( 'cd/ && cd xampp/htdocs/giri && git reset --hard HEAD && git pull origin thesis-2017' );
echo $op;