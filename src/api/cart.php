<?php
    
    $conn = new mysqli('localhost','root','root','aolaigo');
    $conn->set_charset('utf8');

    $username = $_GET['username'];
    $sql = "select * from cart as c where c.userid = '$username'";
    $res = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
            // echo $username;
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>