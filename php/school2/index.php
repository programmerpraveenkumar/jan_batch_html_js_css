<?php
session_start();
if(isset($_SESSION['user_id'])&& $_SESSION['user_id'] != ""){
    header("location:home.php");
}
?>
<html>
    <head>
    <style type="text/css">
    body{
        width:50%;
        margin:0 auto;
    }
    input{
        width:100%;
        margin:10px;
    }
    </style>
    </head>
    <body>
        <h1>Student Login</h1>
        <?php 
            if(isset($_GET['error_message'])){
                echo $_GET['error_message'];
            }
        ?>
        <form action="login_validate.php" method="POST">
            <div>
                <input type="text" placeholder="enter UserId" name="user_id"/>
            </div>
            <div>
                <input type="text" placeholder="enter Password" name="password"/>
            </div>
            <div>
                <input type="submit" />
            </div>

        </form>
    </body>
</html>