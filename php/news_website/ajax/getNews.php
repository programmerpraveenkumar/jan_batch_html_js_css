<?php
require '../db.php';
$city_id = $_GET['city_id'];
$res = $db->query("SELECT * FROM news_content where  city_id  =$city_id");
//print_r($res);
// if($res->num_rows == 0){
//   echo "<h1>No data found</h1>";
//   return;
// }
  while($row = $res->fetch_assoc()){
      echo ' <li>
      <h2><a href="#">'.$row['title'].'</a></h2>
      <div class="article-info box">
        <p class="f-right">'.$row['posted_time'].'</p>
        <p class="f-left">| Posted by <a href="#">'.$row['posted_by_name'].'</a> | Tags By '.$row['tags'].'</p>
      </div>
      <p>'.$row['content'].'</p>
      <p class="more"><a href="#">Read more &raquo;</a></p>
    </li>';
  }

?>