<?php 
include 'db.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>SimpleMagazine 01</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/main.css" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="css/skin.css" />
<link rel="stylesheet" media="screen,projection" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

<script type="text/javascript" src="javascript/cufon-yui.js"></script>
<script type="text/javascript" src="javascript/font.font.js"></script>
<script type="text/javascript">
Cufon.replace('h1, h2, h3, h4, h5, h6', {
    hover: true
});
function change_city(){
  //ajax call to server for fetchin the news for the city_id.
  // var xhttp = new XMLHttpRequest();
  // var city_id = document.getElementById("city_dropdown").value;
  // //console.log(city_id);
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     if(this.responseText == ""){
  //       alert("No data found");
        
  //     }
  //     document.getElementById("news_content_id").innerHTML = this.responseText;
     
  //   }
  // };
  // xhttp.open("GET", "http://localhost/news_website/ajax/getNews.php?city_id="+city_id, true);
  // xhttp.send();

}
function validateForm(){
    var city =  document.getElementById("city_dropdown").value;
    var title =  document.getElementById("title").value;
   // var is_user=  document.getElementById("flexCheckDefault").value;
     var user_id_or_name = document.getElementById("user_id_name").value;
  if(city == "" || city == undefined){
    alert("Please select city");
      return false;
  }
  if(title == "" || title == undefined){
    alert("Please Enter title");
      return false;
  }
  // if(is_user == "" || is_user == undefined){
  //   alert("Please  check user checkbox");
  //     return false;
  // }
 
  if(user_id_or_name == "" || user_id_or_name == undefined){
    alert("Please enter username or id");
      return false;
  }
  document.getElementById("post_news_form").submit();
}
</script>
</head>
<body>
<!-- START PAGE SOURCE -->
<div class="main">
  <div id="header" class="box">
    <h1 id="logo">simple</h1>
    <ul id="nav">
      <li><a href="index.php">Homepage</a></li>
      <li  class="current"><a href="post_news.php">Post News</a></li>
      <li><a href="#">Discussion</a></li>
      <li><a href="#">Authors</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div id="section" class="box">
  
    <div id="content">
      <h1>Create News</h1>
    <form method="post" id="post_news_form" class="post_news_form" action="post_news_store.php">
    <div>
  <select class="form-control" name="city_id"  onchange="change_city()" id="city_dropdown">
    <option value="1">Chennai</option>
    <option  value="3">Madurai</option>
    <option  value="2">Trichy</option>
  </select>
  </div>
    <div>  <input class="form-control" id="title" name="title" type="text" placeholder="Enter title"/></div>
    <div><textarea placeholder="Enter Message" class="form-control" name="content" ></textarea></div>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" name="is_user" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault" >
   Is Authorised User
  </label>
</div>

        <div> <input id="user_id_name" name="user_name" class="form-control"  type="text" placeholder="Enter UserName or UserId"/></div>
        <div><textarea name="tags" placeholder="Enter Tags" class="form-control" ></textarea></div>
        <input onClick="validateForm()" class="btn btn-outline-secondary"  type="button" value="SUbmit News"/>
        </form>
    
      <!-- <div class="pagination box"
      >
        <p class="f-right"> <a href="#" class="current">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a> <a href="#">6</a> <a href="#">7</a> <a href="#">Next &raquo;</a> </p>
        <p class="f-left">Page 1 of 13</p>
      </div> -->
    </div>
    
  </div>
</div>
<div id="footer">
  <div class="main box">
    <p class="f-right t-right">Design by <a href="http://www.templatesdock.com/">TemplatesDock</a></p>
    <p class="f-left">Copyright &copy;&nbsp;2010 <a href="#">SimpleMagazine</a></p>
  </div>
</div>
<script type="text/javascript">Cufon.now();</script>
<!-- END PAGE SOURCE -->
</body>
</html>
