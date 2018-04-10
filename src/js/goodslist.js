// jQuery(function($){
  
// });
require(['config'],function(){
    require(['jQuery','jquerySession','caidan'],function(){
        $('header').load('../html/head.html',function(){

            let username = $.session.get('username');
            let user = $('#user');
            user.html(username);

            caidan();
        });

        $.ajax({
            type:'get',
            url:'../api/goodslist.php',
            dataType:'json',
            success:function(res){
                console.log(res);
                add(res);
            }
        });
        function add(res){
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