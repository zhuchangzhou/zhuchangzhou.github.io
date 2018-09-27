<?php
    $file=file_get_contents("user.json");
    $obj=json_decode($file);
    $user=[
         "user"=>$_POST["user"],
         "pass"=>$_POST["pass"],
         "phone"=>$_POST["phone"],
         "email"=>$_POST["email"]
        ];
        $obj ->userinfo[]=$user;
        file_put_contents("user.json",json_encode($obj));
?>