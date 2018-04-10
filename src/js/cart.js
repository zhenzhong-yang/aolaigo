// jQuery(function($){

// });

require(['config'],function(){
    require(['jQuery','jquerySession'],function(){

        let username = $.session.get('username');
        let user = $('#user');
        user.html(username);

        $('footer').load('../html/footer.html');
    });
});