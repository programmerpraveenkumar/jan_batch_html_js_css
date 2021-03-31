<?php 
//to connect with mysql with php
$db = new mysqli("localhost","root","","php_fita_2");
if($db->connect_errno){
    die("no database connection..");
}
//echo 'mysqsl connected..<pre>';
//to access data from mysql
$mobile = $_POST['mobile'];
$password = $_POST['pass'];
$rows = $db->query("SELECT * FROM person WHERE mobile = '$mobile' and pass='$password'");
if($rows->num_rows == 0){
    echo "NO user found..";
}else{
    $person_res = $rows->fetch_assoc();
   // print_r($person_res);\
   echo 'User is exist.username is '.$person_res['name'].' and id is '.$person_res['id'];
}

?>