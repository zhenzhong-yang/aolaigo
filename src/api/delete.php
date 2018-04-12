<?php
    
    $conn = new mysqli('localhost','root','root','aolaigo');
    $conn->set_charset('utf8');

    $del = $_GET['del'];

    if($del == 'del'){
        $goodsid = $_GET['goodsid'];
        $delSQL = "delete from cart where goodsid = '$goodsid'";
        $delRes = $conn->query($delSQL);
        var_dump($delRes);
        echo $goodsid;
    }else{
        $username = $_GET['username'];
        $delSQL = "delete from cart where userid = '$username'";
        $delRes = $conn->query($delSQL);
    }
?>