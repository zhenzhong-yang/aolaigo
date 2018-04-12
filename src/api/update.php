<?php
    $conn = new mysqli('localhost','root','root','aolaigo');
    $conn->set_charset('utf8');

    $goodsid = $_GET['goodsid'];
    $num = $_GET['num'];
    $username = $_GET['username'];
    $sql = "update cart as c set c.goodsnum = '$num' where c.goodsid = '$goodsid' and c.userid = '$username'";
    $res = $conn->query($sql);
    // var_dump($res);
    if($res){
        $uSQL = "select * from cart as c where c.userid = '$username'";
        $uRes = $conn->query($uSQL)->fetch_all(MYSQLI_ASSOC);
            // echo $username;
        echo json_encode($uRes,JSON_UNESCAPED_UNICODE);
    }
?>