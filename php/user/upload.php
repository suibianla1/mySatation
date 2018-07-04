<?php
// require_once '../hb_helper.php';

// $arr = $_FILES;
// echo '<pre>';
// print_r($_FILES);

//命名，时间戳+随机数+后缀名
//获取上传图片的后缀名
// $ext = explode('.', $_FILES['file']['name']);
// print_r($ext);
// $name = time() . rand(10000,99999) .".". $ext[1];
$name = $_FILES['file']['name'];

//判断路径是否存在
$path = '../../upload/';
if (!file_exists($path)) {
  mkdir($path);
}

$res = move_uploaded_file($_FILES["file"]["tmp_name"], $path . $name);
$arr = ["code"=>200, "msg"=>"操作失败"];
if ($res){
    $arr["code"]=0;
    $arr["msg"]="操作成功";
    $arr["data"]= ['imgUrl'=>$path . $name];
}
echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>