<?php
require 'db.php';

$title = $_POST['title'];
$content= $_POST['content'];
$user_name= $_POST['user_name'];
$city_id= $_POST['city_id'];
$tags= $_POST['tags'];
// echo "insert into news_content(title,posted_by_name,content,city_id)values
//('$title','$user_name','$content','$city_id')";
$db->query("insert into news_content(title,posted_by_name,content,city_id,tags)values
            ('$title','$user_name','$content','$city_id','$tags')");
   // echo "inserted..";
   header("location:index.php");//redirection..
?>