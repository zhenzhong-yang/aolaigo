
require(['config'],function(){
    require(['jQuery','jquerySession','lycarousel','caidan'],function(){

        /*获取当前用户用户名*/
        console.log($('.goodsNum').val());
        let username = $.session.get('username');
        // console.log(username);
        let user = $('#user');
        user.html(username);

        /*获取当前用户购物车的商品数量*/
        let goodsNum = $.session.get('goodsNumber');
        // console.log(goodsNum);
        $('.goodsNum').html(goodsNum);
        
        caidan();

        /*轮播图*/
        $('.banner').lyCarousel({
            width:'100%',height:450,
            type:'fade',
            imgs:['images/banner1.jpg','images/banner2.jpg']
        });


        $.ajax({
            type:'get',
            url:'api/index.php',
            dataType:'json',
            success:function(res){
                // console.log(res);
                $('.goodsUl1').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 'z'){
                        return `<li class="li">
                        <a href=""><img src="${item.img_url}"></a>
                        </li>`
                    }
                }));
                $('.goodsUl2').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 's'){
                        return `<li class="li">
                        <a href=""><img src="${item.img_url} " height="64" width="112" ></a>
                        </li>`
                    }
                }));
                $('.goodsUl3').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 'k'){
                        return `<li class="li">
                        <a href=""><img src="${item.img_url}" height="64" width="112" ></a>
                        </li>`
                    }
                }));
                $('.goodsUl4').html(res.map(function(item){
                    // console.log(item.img_url);
                    if(item.img_name == 'y'){
                        return `<li class="li">
                        <a href=""><img src="${item.img_url}"></a>
                        </li>`
                    }
                }));
            }
        });

        $('#goTop').on('click',function(){

            var timer = setInterval(function(){
                scroll = window.scrollY;
                var speed = parseInt(scroll/5)

                if(scroll <= 10){
                    
                    clearInterval(timer);
                    window.scrollTo(0,0);   //设置浏览器滚动的距离
                }
                scrollBy(0,-speed);

            },50);
            
        })

    });
});