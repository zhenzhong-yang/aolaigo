
require(['config'],function(){
    require(['jQuery','jquerySession'],function(){

        /*获取当前用户名*/
        let username = $.session.get('username');
        console.log(username);
        let user = $('#user');
        user.html(username);

        /*从cookie获取当前用户购车的商品数量*/
        let goodsNum = $.session.get('goodsNumber');
        console.log(goodsNum);
        $('.goodsNum').val(goodsNum);

        // let goods_id;
        let del = 'del';
        let price = 0;
        let goodsNumber = 0;
        let goodsnums = 0;


        

        $.ajax({
            type:'get',
            data:{'username':username},
            url:'../api/cart.php',
            dataType:'json',
            success:function(res){
                console.log(res);
                /*通过用户名把当前用户的商品写入购物车*/
                $('tbody').html(res.map(function(item){

                    /*从数据获取商品总数*/
                    goodsNumber += (item.goodsnum)*1; 
                    /*把商品总数写入cookie*/
                    $.session.set('goodsNumber',goodsNumber);
                    console.log(goodsNumber);
                    /*获取全部商品的价格并相加*/
                    price += (item.goodsnum*item.goodsprice)
                    // /*商品id*/
                    // goods_id = item.goodsid;
                    
                    return `<tr id="cart_tr" class="${item.goodsid}">
                        <td><input type="checkbox" class="checked"/></td>
                        <td class="td_two">
                            <div id="cart_img"><img src="${item.goodsimg}" height="60" width="60" alt="" /></div>
                            <p>${item.goodsname}</p>
                            <span></span>
                        </td>
                        <td id="num_prv">${item.goodsprice}</td>
                        <td><input type="number" id="update_num" value="${item.goodsnum}" style="text-align:center;border:1px solid #ccc;width:100px;height:50px;border-radius:10px;"/></td>
                        <td>¥0.00</td>
                        <td id="num_next" style="color:#C81417;font-weight:bold;">${item.goodsnum*item.goodsprice}</td>
                        <td><button class="btn_del">删除</button></td>
                        </tr>`
                }));
            }
        });
        
        
        let zongji = 0;
        $('table').on('click','td input',function(){
            /*获取当前tr*/
            let currentTrs = $(this).closest('tr');
            /*获取整个tbody*/
            let currentTbodys = $(this).closest('tbody');
            /*获取商品id*/
            let goodsid = currentTrs.attr('class');
            /*获取当前的input元素*/
            let input = currentTrs.find('#update_num');
            /*获取当前的商品的单价*/
            let num_prv = currentTrs.find('#num_prv');
            /*获取当前商品的总价*/
            let num_next = currentTrs.find('#num_next');

            if(input.val() <= 0){
                // console.log(666);
                input.val(1);
                return false;
            }
            
            /*勾选计算总价*/
            if($(this)[0].checked && $(this)[0].type == "checkbox"){
                currentTrs.addClass('tr');
                zongji += currentTrs.find('#num_next').html()*1;
                $('#total').html(zongji);
            }else if($(this)[0].checked == false && $(this)[0].type == "checkbox"){
                currentTrs.removeClass('tr');
                zongji -= currentTrs.find('#num_next').html()*1;
                $('#total').html(zongji);
            }

            /*失去焦点修改的数量传入后台写入数据库*/
            input.blur(function(event){
                /*获取当前商品的数量*/
                let num = currentTrs.find('#update_num').val();
                /*声明一个变量存储单个商品的总价*/
                let aa = num*1 * num_prv.html()*1;
                /*把单个商品的总价写入页面*/
                num_next.html(aa);
                
                /*失去焦点发起ajax修改数据库数据*/
                $.ajax({
                    type:'get',
                    data:{'goodsid':goodsid,'num':num,'username':username},
                    url:'../api/update.php',
                    dataType:'json',
                    success:function(res){
                        console.log(res);
                        let goodsnumber = 0;
                        res.map(function(item){
                            goodsnumber += (item.goodsnum)*1; 
                            $.session.set('goodsNumber',goodsnumber);
                            goodsnums = $.session.get('goodsNumber');
                            $('.goodsNum').val(goodsnums);
                        });
                    }
                });
            });
        });

        /*点击按钮删除商品*/
        $('table').on('click','td button',function(){
            /*获取当前tr*/
            let currentTr = $(this).closest('tr');
            /*获取当前tr的类名*/
            let goodsid = currentTr.attr('class');
            console.log(goodsid);
            /*发起ajax请求删除当前商品的数据*/
            $.ajax({
                type:'get',
                data:{'goodsid':goodsid,'del':del},
                url:'../api/delete.php',
                dataType:'html',
                success:function(res){
                    currentTr.remove();
                    // $('#total').html(0);
                    goodsnums = $.session.get('goodsNumber');
                    $('.goodsNum').val(goodsnums);
                }
            });
        });
        // console.log($('#update_num'));
        /*清空购物车*/
        $('#qingkong').on('click',function(){
            console.log(username);
            $.ajax({
                type:'get',
                data:{'username':username,'del':''},
                url:'../api/delete.php',
                dataType:'html',
                success:function(res){
                    $('tbody').remove();
                    $.session.remove('goodsNumber');
                    goodsnums = $.session.get('goodsNumber');
                    $('.goodsNum').val(goodsnums);
                    $('#total').html(price);
                }
            });
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
    });
});