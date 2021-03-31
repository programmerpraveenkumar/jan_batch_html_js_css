<?php
session_start();
$user_id = $_POST['user_id'];
$password = $_POST['password'];
include_once 'db.php';
if(empty($user_id ) || empty($password) || $user_id == "" || $password ==""){
    //echo 'userid or password is empty..';
    header("Location:index.php?error_message=username or password is empty");
    exit;
    
}
$res = $db->query("select name from person where mobile = '$user_id' and pass='$password'");
if($res->num_rows == 0){
    header("Location:index.php?error_message=username or password wrong");
}else{
    $row = $res->fetch_assoc();
    $_SESSION['user_id'] = $row['name'];
    header("Location:home.php");  
}
// if($user_id == "student" && $password  == "pass"){
//     //load the html file
//     //session has to set..
  
// }else{
//    // echo 'userid or password is wrong..';
  
// }

?>