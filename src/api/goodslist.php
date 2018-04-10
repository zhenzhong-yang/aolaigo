<?php
    $conn = new mysqli("localhost","root","root","aolaigo");
    $conn->set_charset("utf8");
    $sql = "select * from goods";
    $res = $conn->query($sql)->fetch_all(MYSQL_ASSOC);
    echo json_encode($res);
?>