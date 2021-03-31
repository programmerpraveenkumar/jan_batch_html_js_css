<pre>
<?php
require('../db.php');
$res = $db->query("select * from news_content");
//for mulitple data..iteration has to be done.
// while($row = $res->fetch_assoc()){
//     //print_r($row);
//     echo '<h1>'.$row['title'].'</h1>-<i>'.$row['posted_time'].'</i><br>';
// }
while($row = $res->fetch_assoc()){
   echo ' <li>
   <h2><a href="#">'.$row['title'].'</a></h2>
   <div class="article-info box">
     <p class="f-right">'.$row['posted_time'].'</p>
     <p class="f-left">| Posted by <a href="#">'.$row['posted_by_name'].'</a> | Tags By '.$row['tags'].'</p>
   </div>
   <p>'.$row['content'].'</p>
   <p class="more"><a href="#">asdfasfRead more &raquo;</a></p>
 </li>';
}
?>
