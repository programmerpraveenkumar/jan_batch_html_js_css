<?php
///creating array..(index array)
$student = array("test","test",'test1',"test2","test","test",'test1',"test2");
echo '<h1>'.$student[3].'</h1>';
echo count($student);
//count()->get the size of the array..
// for($i=0;$i<5;$i++){
//         echo $i.'<br>';
//     }
for($i=0;$i<count($student);$i++){
    echo $student[$i].'<br>';
}
//associative array
$detail = array("name"=>"sample name",
                "email"=>"testeamil@gmail.com",
                "pincode"=>"12487",
                "mobile"=>"646464646456"
);
        echo $detail['email'];

        //ony accessing value.
        foreach($detail as $val){
            echo $val.'<br>';
        }
        //accessing key and value.
        foreach($detail as $key=>$val){
            echo $key.'--'.$val.'<br>';
        }
?>