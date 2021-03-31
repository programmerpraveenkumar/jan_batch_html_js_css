<?php 
// //coookie
// setcookie("user_id","test cookie value",time() + (86400 * 30),"/");
// echo "cookie is stored..";
if(isset($_COOKIE["user_id"]))
    echo $_COOKIE["user_id"];
    else{
        echo "cookie is not set..Pls accept for the cookie storeage.     ";
    }
?>