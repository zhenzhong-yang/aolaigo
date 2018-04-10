// jQuery(function($){

// });
require(['config'],function(){
    require(['jQuery','jquerySession','lyzoom','caidan'],function(){
        $('header').load('../html/head.html',function(){

            let username = $.session.get('username');
            let user = $('#user');
            user.html(username);

            /*加入购物车*/
             $('.addCart').on('click',function(){
                let number = $('#number').val();console.log(number);console.log(id);console.log(username);
                $.ajax({
                    type:'get',
                    url:'../api/addCart.php?goods_id='+id+'&number='+number+'&username='+username,
                    dataType:'json',
                    success:function(res,status){}
                }); 
            });

            caidan();
        });
        $('footer').load('../html/footer.html');


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
        $.ajax({
             type:'get',
             url:'../api/goodslist.php',
             dataType:'json',
             success:function(res,status){

                let tupian;
                res.map(function(item){
                    if(item.goods_id == id){
                         console.log(item)
                         tupian = item.goods_imgurl;
                    }
                });
                console.log(tupian);
                let lyzoom = $('.lyzoom-big').children('img');
                console.log(lyzoom);
                lyzoom.attr('src',tupian);
                lyzoom.attr('width',1000);
                $('#img').attr('src',tupian);
                // $('#img').attr('data-big',tupian);

                $('#name').html(res.map(function(item){
                    if(item.goods_id == id){
                        return `${item.goods_name}`;
                    }
                }));

                $('#xian').html(res.map(function(item){
                    if(item.goods_id == id){
                        return `￥${item.goods_price}`;
                    }
                }));

                $('#yuan').html(res.map(function(item){
                    if(item.goods_id == id){
                        return `￥${item.goods_yuanjia}`;
                    }
                }));
            }
        });
        
        /*放大镜效果*/
        $('.goods').lyZoom(function(){
            
        });
    });
});