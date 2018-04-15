<?php

    $conn = new mysqli("localhost","root","root","aolaigo");
    $conn->set_charset("utf8");

    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $qty = $_GET['qty'];
    $goods_class = $_GET['goods_class'];

    $sql = "select * from goods where goods.goods_class = '$goods_class'";
    $data = $conn->query($sql)->fetch_all(MYSQL_ASSOC);

    if($qty == ''){
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }else{
        // 格式化数据
        $res = array(
            "total" => count($data),
            "data" => array_slice($data,$qty*($page-1),$qty),
            "qty" => $qty*1,
            "page" => $page*1,
            "goods_class" =>$goods_class
        );

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }
?>