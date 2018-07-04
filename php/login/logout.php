<?php
session_start();
unset($_SESSION["userId"]);
unset($_SESSION["username"]);
$arr = ["code"=>200];
if (empty($_SESSION)){
    $arr["code"]=0;
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>