<?php
require_once '../hb_helper.php';
session_start();
// print_r($_POST['username']);

if (!empty($_POST)) {
  $username = $_POST['username'];
  $pwd = $_POST['pwd'];
  $sql = "SELECT username FROM userinfo WHERE username='".$username."'";
  $res = chaxun($sql);
  // print_r($res);
  $arr = ['code'=>200, "msg"=>"登录失败"];
  if ($res) {
    $sql1 = "SELECT * FROM userinfo WHERE pwd=".$pwd." AND username='".$username."'";
    // echo $sql1;
    $res1 = chaxun($sql1);
    $dataArr = [];
    if ($res1) {
      $arr['code'] = 0;
      $arr['msg'] = '登录成功';
      $_SESSION['username'] = $res1[0]['username'];
      $_SESSION['userId'] = $res1[0]['userId'];
      $dataArr = $res1[0];
      unset($dataArr['pwd']);
      // print_r($dataArr);
      $arr['data'] = $dataArr;
    }else {
      $arr['msg'] = '密码错误';
    }
  }else{
    $arr['msg'] = '用户名不存在';
  }
  echo json_encode($arr, JSON_UNESCAPED_UNICODE);
}
?>