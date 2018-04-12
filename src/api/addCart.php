<?php
    
    $conn = new mysqli("localhost","root","root","aolaigo");

    $conn->set_charset('utf8');

    $goods_id = $_GET['goods_id'];
    $number = $_GET['number'];
    $username = $_GET['username'];
    $price = $_GET['price'];
    $goodsname = $_GET['goodsname'];
    $img = $_GET['img'];

    $sql = "select * from cart as c where c.userid = '$username' and c.goodsid = '$goods_id'";

    $res = $conn->query($sql);
    $r = $res->num_rows>0;
    echo $r;
    if($res->num_rows>0){
        $uSQL = "update cart as c set c.goodsnum = c.goodsnum + '$number' where c.userid = '$username' and c.goodsid = '$goods_id'";
        $uRes = $conn->query($uSQL);
    }else{
        $iSQL = "insert into cart(userid,goodsid,goodsnum,goodsprice,goodsname,goodsimg) values('$username','$goods_id','$number','$price','$goodsname','$img')";
        $iRes = $conn->query($iSQL);
    }
?>