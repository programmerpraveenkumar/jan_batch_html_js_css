<?php
//db connection
$db = new mysqli("localhost","root","","news_magazine");
if($db->connect_errno){
    die("No database connection.");//exit the application.
}
?>