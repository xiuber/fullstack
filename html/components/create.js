/**
 * Created by zhouxiangbo on 2017/11/4 0004.
 * description:注册
 */
define([
    'jquery',
], function (jquery) {
    $('[data-attach-point="send"]').click(function(){
        var name=$('[data-attach-point="name"]').val();
        var pwd=$('[data-attach-point="pwd"]').val();
        var phone=$('[data-attach-point="phone"]').val();
        if(name==""){
            $('[data-attach-point="name"]').parent().css("borderBottom","1px solid red");
            $('[data-attach-point="name"]').parent().animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "0px" }, 100);
        }else if(pwd==""){
            $('[data-attach-point="pwd"]').parent().css("borderBottom","1px solid red");
            $('[data-attach-point="pwd"]').parent().animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "0px" }, 100);
            $('[data-attach-point="name"]').parent().css("borderBottom","1px solid #B2BED8");
        }else if(phone==""||(/^1[34578]\d{9}$/.test(phone)!=true)){
            $('[data-attach-point="phone"]').parent().css("borderBottom","1px solid red");
            $('[data-attach-point="phone"]').parent().animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100).animate({ left: "0px" }, 100);
            $('[data-attach-point="pwd"]').parent().css("borderBottom","1px solid #B2BED8");
        }else{
            $('[data-attach-point="pwd"]').parent().css("borderBottom","1px solid #B2BED8");
            $('[data-attach-point="name"]').parent().css("borderBottom","1px solid #B2BED8");
            $('[data-attach-point="phone"]').parent().css("borderBottom","1px solid #B2BED8");
            $.ajax({
                url:configData.dataHost+'/api/login/createAccount',
                type:'post',
                dataType:'json',
                data:{
                    account:name,
                    password:pwd,
                    phone:phone
                },
                success:function(data){
                    if(data){
                        $('.diaInfo').text('注册成功');
                        $(".dialog").show().fadeOut(2000,function(){
                            window.location.href='index.html';
                        })
                    }else{
                        $('.diaInfo').text('帐号存在');
                        $(".dialog").show().fadeOut(2000);
                    }
                }
            });
        }

    });
});