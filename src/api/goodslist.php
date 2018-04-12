<?php
    $conn = new mysqli("localhost","root","root","aolaigo");
    $conn->set_charset("utf8");

    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $qty = $_GET['qty'];
    $num = $_GET['num'];

    $sql = "select * from goods";
    $data = $conn->query($sql)->fetch_all(MYSQL_ASSOC);
    // $data = array_slice($data,$qty*($page-1),$qty);


    // var_dump($res);
    // echo $res;
    
    if($num){
        // $timeSQL = "select * from goods Order By goods_time Desc";
        $timeSQL = "select * from goods order by goods_time";
        $timeRes = $conn->query($timeSQL)->fetch_all(MYSQL_ASSOC);

        $res = array(
            "total" => count($timeRes),
            "data" => array_slice($timeRes,$qty*($page-1),$qty),
            "qty" => $qty*1,
            "page" => $page*1
        );

       echo json_encode($res,JSON_UNESCAPED_UNICODE); 
    }else if($qty){
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