// jQuery(function($){
  
// });
require(['config'],function(){
    require(['jQuery','jquerySession','caidan'],function(){
        $('header').load('../html/head.html',function(){

            /*获取当前用户名*/
            let username = $.session.get('username');
            let user = $('#user');
            user.html(username);

            /*获取当前用户名商品数量*/
            let goodsNum = $.session.get('goodsNumber');
            console.log(goodsNum);
            $('.goodsNum').html(goodsNum);

            caidan();
        });

        let qty = 18;

        /*发起请求*/
        function sendAjax(){
            $.ajax({
                type:'get',
                data:{'qty':qty},
                url:'../api/goodslist.php',
                dataType:'json',
                success:function(res){
                    console.log(res);
                    add(res);
                }
            });
        }
        sendAjax();


        /*把商品写入页面*/
        function add(res){
            $('#goodslist').html(res.data.map(function(item){
                console.log(item);
                return `<li>
                    <a href='details.html?goodsid=${item.goods_id}'><img src="${item.goods_imgurl}"/></a>
                    <p><span>￥${item.goods_price}</span><del>￥${item.goods_yuanjia}</del></p>
                    <p>${item.goods_name}</p>
                </li>`
            }));

            /*分页*/
            let pageLen = Math.ceil(res.total/res.qty);
            $('#page').html('');
            for(let i=0;i<pageLen;i++){
                let span = $('<span/>');
                span.html(i+1);

                // 高亮分页
                if(i === res.page-1){
                    span.addClass('active');
                }
                $('#page').append(span);
            }
            active();
        }


        function active(){
            /*点击高亮*/
            $('#page').on('click','span',function(){
                console.log($(this).html());
                let pageNo = $(this).html();
                $.ajax({
                    type:'get',
                    data:{'qty':qty,'page':pageNo},
                    url:'../api/goodslist.php',
                    dataType:'json',
                    success:function(res){
                        console.log(res);
                        add(res);
                    }
                });
            });
        }




        $('#zong').on('click',function(){
            sendAjax();
            active();
            $('#page').show();
        });

        let num = 17;


        
        $('dl').on('click','dd',function(){
            console.log(666);
            $(this).addClass('dd');
            $(this).siblings('dd').removeClass('dd');
        });

        /*时间排序*/
        let dianji = 1;
        $('#shipai').on('click',function(){
            console.log($(this));
            let dis = $(this);
            dis.find('i').show();
            let pai = 'pai';
            if(dianji == 1){
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':pai},
                    url:'../api/time.php',
                    dataType:'json',
                    success:function(res){console.log(666);
                        console.log(res);
                        hasPai(res);
                    }
                });
                $('#page').hide();
                $('#shipai').find('img').attr('src','../images/jiang.png');
                dianji = 2;
            }else{
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':''},
                    url:'../api/time.php',
                    dataType:'json',
                    success:function(res){console.log(666);
                        console.log(res);
                        hasPai(res);
                    }
                });
                $('#page').hide();
                $('#shipai').find('img').attr('src','../images/sheng.png');
                dianji = 1;
            }
            dis.siblings('dd').on('click',function(){
                console.log(123456);
                dis.find('i').hide();
            });
        });

        /*价格排序*/
        $('#jiapai').on('click',function(){
            console.log($(this));
            let dis = $(this);
            dis.find('i').show();
            let pai = 'pai';
            if(dianji == 1){
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':''},
                    url:'../api/price.php',
                    dataType:'json',
                    success:function(res){console.log(666);
                        console.log(res);
                        hasPai(res);
                    }
                });
                $('#page').hide();
                $('#jiapai').find('img').attr('src','../images/sheng.png');
                dianji = 2;
            }else{
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':pai},
                    url:'../api/price.php',
                    dataType:'json',
                    success:function(res){console.log(666);
                        console.log(res);
                        hasPai(res);
                    }
                });
                $('#page').hide();
                $('#jiapai').find('img').attr('src','../images/jiang.png');
                dianji = 1;
            }
            dis.siblings('dd').on('click',function(){
                console.log(123456);
                dis.find('i').hide();
            });
        });

    function hasPai(res){
        $('#goodslist').html(res.map(function(item){
            console.log(item);
            return `<li>
                <a href='details.html?goodsid=${item.goods_id}'><img src="${item.goods_imgurl}"/></a>
                <p><span>￥${item.goods_price}</span><del>￥${item.goods_yuanjia}</del></p>
                <p>${item.goods_name}</p>
            </li>`
        }));
    }
















        $('footer').load('../html/footer.html');
        
    });
});