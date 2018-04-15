<?php
    
    $conn = new mysqli("localhost","root","root","aolaigo");

    $type = $_GET['type'];

    if($type == "type"){

        $phone = $_GET["phone"];
        $password = $_GET['password'];

        $sql = "select * from user as u where u.user_phone = '$phone'";
        $res = $conn->query($sql);
        if($res->num_rows>0){
            echo "no";
        }else{
            $newSQL = "insert into user(user_name,user_password,user_phone) values ('$phone','$password','$phone')";
            $newRES = $conn->query($newSQL);
            echo "ok";
        }
    }else{
        $username = $_GET["username"];
        $password = $_GET["password"];

        $sql = "select * from user as u where u.user_name = '$username' and u.user_password = '$password'";
        $res = $conn->query($sql)->fetch_all(MYSQL_ASSOC);
        if($res){
            echo "OK";
        }else{
            echo "KO";
        }

    }
?>