<?php
session_start();
if(isset($_SESSION['user_id']) && $_SESSION['user_id'] != ""){
    include 'header.php';
    echo 'About php '. $_SESSION['user_id'];
    echo '<a href="logout.php">CLick here to logout</a>';
    fromHeader('About');
}else{
header("location:index.php");
}


 
?>