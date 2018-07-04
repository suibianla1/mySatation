<?php
require_once '../hb_helper.php';

$res = add('userinfo',$_POST);

$arr = ['code'=> 200, 'msg'=>'注册失败'];
if ($res) {
  $arr = ['code'=>0, 'msg'=>'注册成功'];
}

echo json_encode($arr, JSON_UNESCAPED_UNICODE)
?>