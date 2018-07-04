<?php
session_start();
$arr = ['code'=>200, 'msg'=> '未登录，请先登录'];
if (!empty($_SESSION)) {
  if (!empty($_SESSION['username']) && !empty($_SESSION['userId'])) {
    $arr = ['code'=>0, 'msg'=>'登录成功'];
  }
}
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>