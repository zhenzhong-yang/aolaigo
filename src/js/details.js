// jQuery(function($){

// });
require(['config'],function(){
    require(['jQuery','jquerySession','lyzoom','caidan'],function(){
        $('header').load('../html/head.html',function(){

            let username = $.session.get('username');
            let user = $('#user');
            user.html(username);

            let goodsNum = $.session.get('goodsNumber');
            console.log(goodsNum);
            $('.goodsNum').html(goodsNum);

              //获取url中的参数
            function getUrlParam(name) {
               var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                console.log(reg);
               var r = window.location.search.substr(1).match(reg); //匹配目标参数
               if (r != null) return unescape(r[2]); return null; //返回参数值
            }
              //接收URL中的参数
            var id = getUrlParam('goodsid');
            console.log('id:'+id);
            let tupian;
            console.log(tupian);
            let qty;
            $.ajax({
                 type:'get',
                data:{'qty':''},
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
                    console.log(tupian);
                    let lyzoom = $('.lyzoom-big').children('img');
                    console.log(lyzoom);
                    lyzoom.attr('src',tupian);
                    lyzoom.attr('width',1000);
                    $('#img').attr('src',tupian);
                }
            });
             
            


            /*加入购物车*/
             $('.addCart').on('click',function(){

                let number = $('#number').val();

                let cookieNum = $('.goodsNum').html();
                 console.log($('.goodsNum').html());
                console.log(number,parseInt(cookieNum));

                // let num = $('.goodsNum').val(goodsNum);

                // $.session.set('goodsNumber',goodsNumber);

                let numbers = parseInt(cookieNum)+parseInt(number);
                $.session.set('goodsNumber',numbers);
                $('.goodsNum').html(numbers);
                
                console.log(goodsNum);

                let img = $('#img')[0].src;
                console.log($('#img')[0].src);
                let goodsname = $('#dd_name').html();
                console.log(goodsname);
                let price = $('#xian').html();
                console.log(price);

                

                /*飞入购物车*/
                $imgs = $('#img');
                console.log($imgs);
                $copyImg = $imgs.clone();
                $copyImg.stop();

                $copyImg.css({
                    position:'absolute',
                    left:$imgs.offset().left,
                    top:$imgs.offset().top,
                    width:$imgs.outerWidth()
                });

                $('body').append($copyImg);

                //动画
                $copyImg.animate({left:'78%',top:'0%',width:0,height:0},function(){
                    $copyImg.remove();
                    let child=$('body').children('img');
                    child.remove();
                });

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
        $('footer').load('../html/footer.html');



        
        /*放大镜效果*/
        $('.goods').lyZoom(function(){
            
        });
    });
});