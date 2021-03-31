<html>

<head>
<style type="text/css">
div{
    border:1px solid red;
    width:50%;
}
img{
    width:20%;
    height:100px;
}
</style>
</head>
<body>


<?php

 include_once 'db.php';

 $rows = $db->query("select * from person");
 //to itereate the database result.
 while($row  = $rows->fetch_assoc()){
   $img = $row['profile_img'];
   if($img == ""){
       //default pic..
       $img = "image/default.png";
   }
    //  print_r($row);
   echo '<div><span>'.$row['name'].'</span><span>'.$row['address'].'</span>
    <img src="'.$img.'"/>

   </div>';
 }
//  while($row  = $rows->fetch_array()){
//      print_r($row);
//  }
 
?>
</body>