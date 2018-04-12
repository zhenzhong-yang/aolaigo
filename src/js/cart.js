
require(['config'],function(){
    require(['jQuery','jquerySession'],function(){

        let username = $.session.get('username');
        console.log(username);
        let user = $('#user');
        user.html(username);

        let goodsNum = $.session.get('goodsNumber');
        console.log(goodsNum);
        $('.goodsNum').val(goodsNum);

        let goods_id;
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
                $('tbody').html(res.map(function(item){

                    goodsNumber += (item.goodsnum)*1; 
                    $.session.set('goodsNumber',goodsNumber);
                    console.log(goodsNumber);
                    price += (item.goodsnum*item.goodsprice)
                    $('#total').html(price);
                    
                    goods_id = item.goodsid;
                    
                    return `<tr id="cart_tr" class="${item.goodsid}">
                        <td><input type="checkbox" /></td>
                        <td class="td_two">
                            <div id="cart_img"><img src="${item.goodsimg}" height="60" width="60" alt="" /></div>
                            <p>${item.goodsname}</p>
                            <span>黑色</span>
                        </td>
                        <td>${item.goodsprice}</td>
                        <td><input type="number" id="update_num" value="${item.goodsnum}" style="text-align:center;border:1px solid #ccc;width:100px;height:50px;border-radius:10px;"/></td>
                        <td>¥0.00</td>
                        <td style="color:#C81417;font-weight:bold;">${item.goodsnum*item.goodsprice}</td>
                        <td><button class="btn_del">删除</button></td>
                        </tr>`
                }));
                
                $('table').on('click','td input',function(){
                    let currentTrs = $(this).closest('tr');
                    console.log(currentTrs);
                    let goodsid = currentTrs.attr('class');
                    console.log(goodsid);
                    let input = currentTrs.find('#update_num');

                    input.blur(function(event){
                        // console.log(666);
                        let num = currentTrs.find('#update_num').val();
                        // $.session.set('goodsNumber',);
                        console.log(num);
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
                                    console.log(goodsnumber);
                                });
                            }
                        });
                    });
                });
            }
        });
        console.log(price);

        console.log($('table'));
        $('table').on('click','td button',function(){
            let currentTr = $(this).closest('tr');
            
            console.log(currentTr);
            let goodsid = currentTr.attr('class');
            console.log(goodsid);
            $.ajax({
                type:'get',
                data:{'goodsid':goodsid,'del':del},
                url:'../api/delete.php',
                dataType:'html',
                success:function(res){
                    currentTr.remove();
                    goodsnums = $.session.get('goodsNumber');
                    $('.goodsNum').val(goodsnums);

                    // total();
                }
            });
        })
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


        $('footer').load('../html/footer.html');
    });
});