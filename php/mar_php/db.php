<?php 
//to connect with mysql with php
$db = new mysqli("localhost","root","","php_fita_2");
if($db->connect_errno){
    die("no database connection..");
}
//echo 'mysqsl connected..<pre>';
//to access data from mysql
echo '<pre>';
$rows = $db->query("select * from person");
//to itereate the database result.
while($row  = $rows->fetch_assoc()){
    print_r($row);
}
// while($row  = $rows->fetch_array()){
//     print_r($row);
// }

?>