<?php
header("content-type: text/html; charset=utf-8");
require_once '../hb_helper.php';

$sql = 'SELECT * FROM tuwen';

$res = chaxun($sql);

$arr = ['code'=>200, 'msg'=>'查询失败' ];

if ($res) {
  $arr['code'] = 0;
  $arr['msg'] = '查询成功';
  $arr['data'] = $res;
}

echo json_encode($arr,JSON_UNESCAPED_UNICODE);
// echo '123'
?>