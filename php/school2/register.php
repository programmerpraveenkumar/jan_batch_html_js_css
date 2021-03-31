<?php
if(isset($_POST['submit'])){
    include_once 'db.php';
    $name = $_POST['name'];
    $address  = $_POST['address'];
    $mobile = $_POST['mobile'];
    $pass = $_POST['pass'];
    
    $res = $db->query("insert into person(name,address,mobile,pass)values('$name','$address','$mobile','$pass')");
    if($res){
        echo "inserted";
    }else{
        echo "not insert..error in the query";
    }
}

?>

<html>
<head></head>
<body>
<form action="register.php" method="POST">
            <div>
                <input type="text" placeholder="enter Name" name="name"/>
            </div>
            <div>
                <input type="text" placeholder="enter Mobile" name="mobile"/>
            </div>
            <div>
                <input type="text" placeholder="enter address" name="address"/>
            </div>
            <div>
                <input type="text" placeholder="enter Password" name="pass"/>
            </div>
            <div>
                <input type="submit" name="submit" />
            </div>

        </form>
</body>
</html>