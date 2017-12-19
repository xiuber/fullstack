/**
 * Created by zhouxiangbo on 2017/11/03.
 */
define([
    'jquery',
], function (jquery) {

    $('[data-attach-point="send"]').click(function(){
        var name=$('[data-attach-point="name"]').val();
        var pwd=$('[data-attach-point="pwd"]').val();
        if(name==""){
            $('[data-attach-point="name"]').parent().css("borderBottom","1px solid red");
            $('[data-attach-point="name"]').parent().animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "0px" }, 100);
        }else if(pwd==""){
            $('[data-attach-point="pwd"]').parent().css("borderBottom","1px solid red");
            $('[data-attach-point="pwd"]').parent().animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "0px" }, 100);
            $('[data-attach-point="name"]').parent().css("borderBottom","1px solid #B2BED8");
        }else{
            $('[data-attach-point="pwd"]').parent().css("borderBottom","1px solid #B2BED8");
            $('[data-attach-point="name"]').parent().css("borderBottom","1px solid #B2BED8");
            $.ajax({
                url:configData.dataHost+'/api/login/getAccount',
                type:'get',
                dataType:'json',
                data:{
                    account:name,
                    password:pwd
                },
                success:function(data){
                    if(data){
                        $('.diaInfo').text('登录成功');
                        $(".dialog").show().fadeOut(2000,function(){
                            window.location.href='main.html';
                        });
                    }else{
                        $('.diaInfo').text('帐号或密码错误');
                        $(".dialog").show().fadeOut(2000);
                    }
                }
            });
        }

    });
})