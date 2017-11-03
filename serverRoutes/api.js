/**
 * Created by zhouxiangbo on 2017/11/3 0003.
 * description:api文件
 */
"use strict";
var  models = require('./db');
var  express = require('express');
var  router = express.Router();


// 创建账号接口
router.post('/api/login/createAccount',function(req,res){
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    var  newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save(function(err,data){
        if (err) {
            res.send(err);
        } else {
             res.send(true);
        }
    });
});

// 获取已有账号接口
router.get('/api/login/getAccount',function(req,res){
    // 通过模型去查找数据库
    models.Login.find(function(err,data){
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});





module.exports = router;
