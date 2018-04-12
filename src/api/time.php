<?php
    
    $conn = new mysqli("localhost","root","root","aolaigo");
    $conn->set_charset("utf8");

    // $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $num = $_GET['num'];
    $pai = $_GET['pai'];

    if($pai == 'pai'){
        
        // 时间升序
        $timeSQL = "select * from goods order by goods_time";
        $timeRes = $conn->query($timeSQL)->fetch_all(MYSQL_ASSOC);

        // $res = array(
        //     "total" => count($timeRes),
        //     "data" => array_slice($timeRes,$num*($page-1),$num),
        //     "qty" => $num*1,
        //     "page" => $page*1
        // );

       echo json_encode($timeRes,JSON_UNESCAPED_UNICODE); 
    }else{
        // 时间降序
        $timeSQL = "select * from goods Order By goods_time Desc";
        $timeRes = $conn->query($timeSQL)->fetch_all(MYSQL_ASSOC);

        echo json_encode($timeRes,JSON_UNESCAPED_UNICODE);
    }
?>