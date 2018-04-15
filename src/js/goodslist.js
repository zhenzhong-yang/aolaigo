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

        let goods_class;
          //获取url中的参数
        function getUrlParam(name) {
           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            console.log(reg);
           var r = window.location.search.substr(1).match(reg); //匹配目标参数
           if (r != null) return decodeURIComponent(r[2]); return ''; //返回参数值
        }
          //接收URL中的参数
        goods_class = getUrlParam('goods_class');
        console.log(goods_class);

        let qty = 18;

        /*发起请求*/
        function sendAjax(){
            $.ajax({
                type:'get',
                data:{'qty':qty,'goods_class':goods_class},
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
                // if(item.goods_class == goods_class){
                    return `<li>
                        <a href='details.html?goodsid=${item.goods_id}&goods_class=${goods_class}'><img src="${item.goods_imgurl}" style="width:100%;height:100%;"/></a>
                        <p><span>￥${item.goods_price}</span><del>￥${item.goods_yuanjia}</del></p>
                        <p>${item.goods_name}</p>
                    </li>`
                // }

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
                    data:{'qty':qty,'page':pageNo,'goods_class':goods_class},
                    url:'../api/goodslist.php',
                    dataType:'json',
                    success:function(res){
                        console.log(res);
                        add(res);
                    }
                });
            });
        }

        /*综合排序*/
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
            /*当前按钮*/
            let dis = $(this);
            dis.find('i').show();
            let pai = 'pai';
            /*时间升序*/
            if(dianji == 1){
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':pai,'goods_class':goods_class},
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
            /*时间降序*/
            }else{
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':'','goods_class':goods_class},
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
            /*当这个按钮的其他兄弟元素点击时图片隐藏*/
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
            /*价格降序*/
            if(dianji == 1){
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':'','goods_class':goods_class},
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
            /*价格升序*/
            }else{
                $.ajax({
                    type:'get',
                    data:{'num':num,'pai':pai,'goods_class':goods_class},
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
    /*排序后写入写入页面的函数*/
    function hasPai(res){
        $('#goodslist').html(res.map(function(item){
            console.log(item);
            return `<li>
                <a href='details.html?goodsid=${item.goods_id}&goods_class=${goods_class}'><img src="${item.goods_imgurl}"/></a>
                <p><span>￥${item.goods_price}</span><del>￥${item.goods_yuanjia}</del></p>
                <p>${item.goods_name}</p>
            </li>`
        }));
    }

        /*从数据库获取图片写入首页*/
        $.ajax({
            type:'get',
            url:'../api/index.php',
            dataType:'json',
            success:function(res){
                // console.log(res);
                $('.goodsUl1').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 'z'){
                        return `<li class="li">
                        <a href=""><img src="../${item.img_url}"></a>
                        </li>`
                    }
                }));
                $('.goodsUl2').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 's'){
                        return `<li class="li">
                        <a href=""><img src="../${item.img_url} " height="64" width="112" ></a>
                        </li>`
                    }
                }));
                $('.goodsUl3').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 'k'){
                        return `<li class="li">
                        <a href=""><img src="../${item.img_url}" height="64" width="112" ></a>
                        </li>`
                    }
                }));
                $('.goodsUl4').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 'y'){
                        return `<li class="li">
                        <a href=""><img src="../${item.img_url}"></a>
                        </li>`
                    }
                }));
            }
        });
        


        $('footer').load('../html/footer.html',function(){
            /*获取当前用户名商品数量*/
            let goodsNum = $.session.get('goodsNumber');
            console.log(goodsNum);
            $('.goodsNum').html(goodsNum);
            /*点击返回顶部*/
            $('#goTop').on('click',function(){
                var timer = setInterval(function(){
                    scroll = window.scrollY;
                    var speed = parseInt(scroll/5)
                    if(scroll <= 10){
                        clearInterval(timer);
                        /*设置浏览器滚动的距离*/
                        window.scrollTo(0,0);
                    }
                    scrollBy(0,-speed);
                },50);
            });
        });
    });
});