// jQuery(function($){


// });

require(['config'],function(){
    require(['jQuery','common'],function(){
        let btn_zhu = $('#btn_zhu');
        // let text = $('#text').val();
        let code = $('.code').html(randomNumber(1000,9999));
        console.log(code);
        let type = 'type';

        btn_zhu.on('click',function(){
            let phone = $('#phone').val();
            let password1 = $('#password1').val();
            let password2 = $('#password2').val();

            $.ajax({
                type:'get',
                data:{'phone':phone,'password':password1,'type':type},
                url:'../api/login.php',
                dataType:'html',
                success:function(res){
                    console.log(res);

                    if(phone === ""){
                        alert("手机号不能为空");
                    }else if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)){
                        alert("手机号不合法");
                        return false;
                    }else if(password1 === ""){
                        alert("密码不能为空");
                    }else if(password2 === ""){
                        alert("确认密码不能为空");
                    }else if(password1 != password2){
                        alert("两次密码不同,请重新输入");
                    }else if(!/^[\d\D]{6,12}$/.test(password1)){
                        alert("密码不正确");
                        return false;
                    }else if(res == "no"){
                        alert("该用户已存在");
                    }else if($('#text').val() == ''){
                        alert("请输入验证码");
                    }else if($('#text').val() != code.html()){
                        alert("验证码错误");
                    }else{
                       location.href = '../index.html';
                    }
                }
            });
        });
    });
});