<?php

/**
 * @Author: Administrator
 * @Date:   2018-06-27 17:07:33
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-06-27 17:11:26
 */
require_once '../hb_helper.php';
$type = $_POST['type'];
// echo $type;
$table = $type;
$sql = "SELECT * FROM {$table} WHERE title LIKE '%".$_POST['key']."%'";
// echo $sql;
$res = chaxun($sql);

$arr = ['code'=>200, 'msg'=>'找不到你要的文章哦'];
if ($res) {
  $arr['code'] = 0;
  $arr['msg'] = '成功';
  $arr['data'] = $res;
}

echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>