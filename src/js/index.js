
require(['config'],function(){
    require(['jQuery','jquerySession','lycarousel','caidan'],function(){

        console.log($('.goodsNum').val());
        let username = $.session.get('username');
        // console.log(username);
        let user = $('#user');
        user.html(username);

        let goodsNum = $.session.get('goodsNumber');
        // console.log(goodsNum);
        $('.goodsNum').html(goodsNum);
        
        caidan();

        $('.banner').lyCarousel({
            width:'100%',height:450,
            type:'fade',
            imgs:['images/banner1.jpg','images/banner2.jpg']
        });

    });
});