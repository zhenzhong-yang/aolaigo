
require(['config'],function(){
    require(['jQuery','jquerySession','lycarousel','caidan'],function(){
        
        let username = $.session.get('username');
        console.log(username);
        let user = $('#user');
        user.html(username);
        
        caidan();

        $('.banner').lyCarousel({
            width:'100%',height:450,
            type:'fade',
            imgs:['images/banner1.jpg','images/banner2.jpg']
        });

    });
});