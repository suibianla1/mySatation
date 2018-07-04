<?php
require_once 'config.php';

function connect(){
  $connect = mysqli_connect(DB_HOST,USER_NAME,DB_PWD,DB_NAME);
  mysqli_set_charset($connect,"utf8");
  return $connect;
}

function chaxun($sql){
  $connect = connect();
  $res = mysqli_query($connect,$sql);
  $arr = [];
  while($row = mysqli_fetch_assoc($res)){
      $arr[] = $row;
  }
  return $arr;
}

function motify($table, $paramsArr, $id){
  // print_r($paramsArr)
  $connect = connect();
  // print_r($paramsArr);
  $sql = "UPDATE {$table} SET ";
  foreach ($paramsArr as $key => $val) {
    $sql .= $key . "='" .$val. "',"; 
  }
  //去掉sql语句最后一个逗号
  $sql = substr($sql, 0, -1);
  $sql .= ' WHERE userId='.$id;
  // echo $sql;
  $res = mysqli_query($connect, $sql);

  return $res;
}

function add($table, $arr){
  $connect = connect();
  $keys = array_keys($arr);
  $values = array_values($arr);

  //  print_r($keys);
  //jiang键和值变成 keys，keys和  ‘values’，‘values’；
  $params = implode(",", $keys);
  $val = implode("','", $values);

  $sql = "INSERT INTO {$table} (".$params.") VALUES ('".$val."')";
  $res = mysqli_query($connect, $sql);

  return $res;

}

?>