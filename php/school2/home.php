<?php
session_start();
function validation(){
    echo "this is from php";
}
include_once 'header.php';
if(isset($_SESSION['user_id']) && $_SESSION['user_id'] != ""){
    echo 'login success. and user id is '. $_SESSION['user_id'];
    echo '<a href="about.php">About</a>';
    echo '<a href="logout.php">CLick here to logout</a>';
    validation();
    fromHeader('');
 
}else{
header("location:index.php");
}


 
?>