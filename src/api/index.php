<?php
    $conn = new mysqli('localhost','root','root','aolaigo');
    $conn->set_charset('utf8');

    $sql = "select * from img";
    $res = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
            // echo $username;
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>