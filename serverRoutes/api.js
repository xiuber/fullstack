/**
 * Created by zhouxiangbo on 2017/11/3 0003.
 * description:api文件
 */
"use strict";
var  models = require('./db');
var  express = require('express');
var  router = express.Router();


// 注册接口
router.post('/api/login/createAccount',function(req,res){
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    var create;
    models.Login.find(function(err,data){
        if (err) {
            res.send(err);
        } else {
            //TODO:判断数据库是否存在帐号
            for(var i=0;i<data.length;i++){
                if(data[i].account==req.body.account){
                    create=false;//帐号存在，注册失败
                    break;
                }else if(data[i].phone==req.body.phone){
                    create=false;//手机号存在，注册失败
                    break;
                }else{
                    create=true;
                }
            }
            //TODO:帐号不存在的情况下，把帐号保存进数据库
            if(create==true) {
                var  newAccount = new models.Login({
                    account : req.body.account,
                    password : req.body.password,
                    phone:req.body.phone
                });
                // 保存数据newAccount数据进mongoDB
                newAccount.save(function(err,data){
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(true);
                    }
                });
            }else{
                res.send(false);
            }
        }

    });


});

// 登录接口
router.get('/api/login/getAccount',function(req,res){
    // 通过模型去查找数据库
    var get;
    models.Login.find(function(err,data){
        if (err) {
            res.send(err);
        } else {
            for(var i=0;i<data.length;i++){
                if(data[i].account==req.query.account&&data[i].password==req.query.password){
                    get=true;//登录成功
                    break;
                }else{
                    get=false; //登录失败
                }
            }
        }
        if(get==true){
            res.send(true);//登录成功
        }else{
            res.send(false);//登录失败
        }
    });
});





module.exports = router;
