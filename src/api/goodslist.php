<?php
    $conn = new mysqli("localhost","root","root","aolaigo");
    $conn->set_charset("utf8");

    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $qty = $_GET['qty'];

    $sql = "select * from goods";
    $data = $conn->query($sql)->fetch_all(MYSQL_ASSOC);

    if($qty == ''){
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }else{
        // 格式化数据
        $res = array(
            "total" => count($data),
            "data" => array_slice($data,$qty*($page-1),$qty),
            "qty" => $qty*1,
            "page" => $page*1
        );

        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }
?>