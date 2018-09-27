<?php
    $user=$_POST["user"];
    $pass=$_POST["pass"];
    $file=file_get_contents("user.json");
    $userinfo=json_decode($file)->userinfo;
    foreach($userinfo as $value){
        if($value->user == $user){
            if($value->pass == $pass){
                echo "login success";
            }else{
                echo "password error";
            }
        }
    }
?>