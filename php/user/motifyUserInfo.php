<?php
require_once '../hb_helper.php';
// print_r($_POST);
$id = $_POST['userId'];
unset($_POST['userId']);

// print_r($_POST);

$connect = connect();

$sql = "UPDATE userinfo SET ";

//如果pwd的值为空，就把它从数组中删除
if (empty($_POST['pwd'])) {
  unset($_POST['pwd']);
}
//同上
// echo empty(0);
if (empty($_POST['gender'])) {
  unset($_POST['gender']);
}

if (empty($_POST['age'])) {
  unset($_POST['age']);
}

if (empty($_POST['signature'])) {
  unset($_POST['signature']);
}
// print_r($_POST);

foreach ($_POST as $key => $val) {
  $sql .= $key . "='" .$val. "',"; 
}
//去掉sql语句最后一个逗号
$sql = substr($sql, 0, -1);
$sql .= ' WHERE userId='.$id;

$res = mysqli_query($connect, $sql);

$arr = ['code'=>200, 'msg'=>'修改失败'];

if ($res) {
  $arr = ['code'=>0, 'msg'=>'修改成功'];
  $sql1 = 'SELECT * FROM userinfo WHERE userid='.$id;
  $res1 = chaxun($sql1);
  if ($res1) {
    $data = $res1[0];
    unset($data['pwd']);
    $arr['data'] = $data;
  }
}

echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>