<?php 
//coookie
setcookie("user_id","test cookie value",time() + (86400 * 30),"/");
echo "cookie is stored..";
?>