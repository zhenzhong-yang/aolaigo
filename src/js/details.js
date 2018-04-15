// jQuery(function($){

// });
require(['config'],function(){
    require(['jQuery','jquerySession','lyzoom','caidan','fly'],function(){
        $('header').load('../html/head.html',function(){

            /*获取当前用户名*/
            let username = $.session.get('username');
            let user = $('#user');
            user.html(username);
            /*获取当前用户商品数量*/
            let goodsNum = $.session.get('goodsNumber');
            console.log(goodsNum);
            $('.goodsNum').html(goodsNum);

              //获取url中的参数
            function getUrlParam(id){
                /*构造一个含有目标参数的正则表达式对象*/
                var reg = new RegExp("(^|&)" + id + "=([^&]*)(&|$)"); 
                console.log(reg);
                var r = window.location.search.substr(1).match(reg); //匹配目标参数
                console.log(r)
                if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
            }
            /*提取参数*/
            var id = getUrlParam('goodsid');
            var goods_class = getUrlParam('goods_class');
            let tupian;
            let qty;
            $.ajax({
                type:'get',
                data:{'qty':'','goods_class':goods_class},
                url:'../api/goodslist.php',
                dataType:'json',
                success:function(res,status){
                    res.map(function(item){
                        if(item.goods_id == id){
                            console.log(item)
                            tupian = item.goods_imgurl;
                            $('#dd_name').html(`${item.goods_name}`);
                            $('#name').html(`${item.goods_name}`);
                            $('#xian').html(`${item.goods_price}`);
                            $('#yuan').html(`<span>￥</span>${item.goods_yuanjia}`);
                        }
                    });
                    /*放大镜*/
                    let lyzoom = $('.lyzoom-big').children('img');
                    lyzoom.attr('src',tupian);
                    lyzoom.attr('width',1000);
                    $('#img').attr('src',tupian);
                }
            });
             
            /*加入购物车*/
            
            $('.addCart').on('click',function(){
                console.log(event.pageX);
                console.log(this.top);

                /*判断用户是否登录*/
                if($('#user').html() == '请登录'){
                    location.href = '../html/login.html';
                    return false;
                }
                let number = $('#number').val();
                let cookieNum = $('.goodsNum').html();

                /*将商品数量写入cookie*/
                let numbers = parseInt(cookieNum)+parseInt(number);
                $.session.set('goodsNumber',numbers);

                /*飞入购物车*/
                $imgs = $('#img');
                console.log($imgs);
                $copyImg = $imgs.clone();
                $copyImg.stop();
                $copyImg.css({
                    width: '150px',
                    height: '150px'
                });

                let car = $("#car").offset(); 
                $copyImg.fly({   
                    start: {    
                        left: event.clientX - 125,//抛物体起点横坐标   
                        top: event.clientY - 125, //抛物体起点纵坐标 
                        },   
                    end: {   
                        left: car.left + 10,//抛物体终点横坐标   
                        top: (window.innerHeight)/3, //抛物体终点纵坐标
                        width:0,
                        height:0,   
                    },   
                    onEnd: function() {    
                        $('.goodsNum').html(numbers);
                    }   
                    });   

                let img = $('#img')[0].src;
                let goodsname = $('#dd_name').html();
                let price = $('#xian').html();
                $.ajax({
                    type:'get',
                    data:{'goods_id':id,'price':price,'username':username,'number':number,'goodsname':goodsname,'img':img},
                    url:'../api/addCart.php',
                    dataType:'json',
                    success:function(res,status){}
                }); 
            });

            caidan();
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
            })
        });
        /*放大镜效果*/
        $('.goods').lyZoom(function(){
            
        });
    });
});