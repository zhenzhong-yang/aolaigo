// require(['config'],function(){
//     require(['jQuery','caidan'],function(){
        function caidan(){
            let one = $('.nav_one');console.log(one);
            let box = $('.nav_two');console.log(box);
            let tab = $('.nav_two_top').children('ul').children('li');console.log(tab);
            let neirong = $('.nav_two_bottom').children('div');console.log(neirong);
            (tab)[0].className = 'aa';
            one.on('mouseenter',function(){
                box.show();
                // console.log(tab[0])
                tab.on('click',function(){
                    let ind = $(this).index();
                    $(this).addClass('aa');
                    $(this).siblings('li').removeClass('aa');

                    neirong.eq(ind).siblings('div').addClass('hid');
                    neirong.eq(ind).addClass('blk');
                    neirong.eq(ind).removeClass('hid');
                }).on('mouseenter',function(){
                    $(this)[0].style.border = "2px solid #C81417";
                }).on('mouseleave',function(){
                    $(this)[0].style.border = "";
                });
            }).on('mouseleave',function(){
                box.hide();
            });
        }
//     });
// });