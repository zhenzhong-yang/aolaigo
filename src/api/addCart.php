<?php
    $goods_id = $_GET['goods_id'];
    $number = $_GET['number'];
    $username = $_GET['username'];
    $time = time();
    $conn = new mysqli('localhost','root','root','aolaigo');

    //   insert into cart(goods_id,goods_num) values ('$goods_id','$number')
    $sql = "insert into cart(user_id,goods_id,goods_num,cart_createtime) values ('$username','$goods_id','$number','$time')";
    $res = $conn->query($sql);
    // var_dump($res,$goods_id,$number,$username);
    var_dump($res);
    // echo $time;
?>