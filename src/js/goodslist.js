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
        let num = 17;

        /*发起请求*/
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
        }

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


        /*价格排序*/
        $('dl').on('click','dd',function(){
            console.log(666);
            $(this).addClass('dd');
            $(this).siblings('dd').removeClass('dd');
            // $('#jiapai').find('i').hide();
        });

        $('#shipai').on('click',function(){
            console.log($(this));
            let dis = $(this);
            dis.find('i').show();
            $.ajax({
                type:'get',
                data:{'num':num},
                url:'../api/goodslist.php',
                dataType:'json',
                success:function(res){
                    console.log(res);
                    add(res);
                    // $('#goodslist').html(res.map(function(item){
                    //     console.log(item);
                    //     return `<li>
                    //         <a href='details.html?goodsid=${item.goods_id}'><img src="${item.goods_imgurl}"/></a>
                    //         <p><span>￥${item.goods_price}</span><del>￥${item.goods_yuanjia}</del></p>
                    //         <p>${item.goods_name}</p>
                    //     </li>`
                    // }));
                }
            });
            dis.siblings('dd').on('click',function(){
                console.log(123456);
                dis.find('i').hide();
            });
        });

        $('footer').load('../html/footer.html');
        
    });
});