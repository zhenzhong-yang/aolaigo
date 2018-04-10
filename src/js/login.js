// jQuery(function($){

// });
require(['config'],function(){
    require(['jQuery','jquerySession'],function(){
        let btn_deng = $('#btn_deng');
        btn_deng.on('click',function(){
            let username = $('#username').val();console.log(username);
            let password = $('#password').val();console.log(password);console.log(666);
            $.ajax({
                type:'get',
                data:{'username':username,'password':password,'type':''},
                url:'../api/login.php',
                dataType:'html',
                async:true,
                success:function(res){
                    console.log(res);
                    if(res == "KO"){
                    alert("用户名或密码错误");
                    }else if(username === ""){
                        alert("邮箱不能为空");
                    }else if(password === ""){
                        alert("密码不能为空");
                    }else{
                        $.session.set('username',username);
                        location.href = '../index.html?id='+username;
                    }
                }
            });
        });
    });
});