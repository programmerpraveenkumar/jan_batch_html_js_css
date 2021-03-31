<?php
if(isset($_POST['submit'])){
    include_once 'db.php';
    echo $_FILES['img']['name'];
    $size = $_FILES['img']['size'];//KB
    //1024KB->1MB
    // if($size > 1024){
    //     echo "file is too big...";
    // }else{
        $path = "image/".$_FILES['img']['name'];
        move_uploaded_file($_FILES['img']['tmp_name'],$path ) ;
        //need to upload the file path against the user.
        //updatePic($path,$_POST['user_id'] );
        $user_id = $_POST['user_id'];
       $db->query("update person set profile_img = '$path' where id='$user_id'");
  //  }
    
  // print_r( $_FILES['img']);

}

?>

<html>
<head></head>
<body>
<form action="file_upload.php" method="POST" enctype="multipart/form-data">
            <div>
                <input type="file" name="img"/>
            </div>
            <div>
                <input type="text" name="user_id" placeholder="enter userid" />
            </div>
           
            <div>
                <input type="submit" name="submit" />
            </div>

        </form>
</body>
</html>