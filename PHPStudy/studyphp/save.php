<?php
include('MsgStruct.php');
var_dump($_POST);

$msg= new MsgStruct($_POST);

var_dump($msg);

?>