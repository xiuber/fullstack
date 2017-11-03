/**
 * Created by zhouxiangbo on 2017/11/03.
 */
define([
    'jquery',
], function (jquery) {

    $('[data-attach-point="ask"]').click(function(){
        $.ajax({
            url:configData.dataHost+'/api/login/getAccount',
            type:'get',
            dataType:'json',
            success:function(data){
                console.log(data);
            }
        });
    });
    $('[data-attach-point="send"]').click(function(){
        var name=$('[data-attach-point="name"]').val();
        var pwd=$('[data-attach-point="pwd"]').val();
        $.ajax({
            url:configData.dataHost+'/api/login/createAccount',
            type:'post',
            dataType:'json',
            data:{
                account:name,
                password:pwd
            },
            success:function(data){
                if(data){
                    alert("添加成功");
                }
            }
        });
    });
})