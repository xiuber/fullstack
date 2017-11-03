/**
 * Created by zhouxiangbo on 2017/11/03
 */
var api=require('./api');
var fs=require('fs');
var path=require('path');
var bodyParser = require('body-parser');

var express = require('express');
var app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);


// 访问静态资源文件 这里是访问所有html目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../html')));


// 因为只有一个页面测试 so 所有请求都走/html/index.html
app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../html/index.html'), 'utf-8');
    res.send(html)
})

// 监听6010端口
app.listen(6010);
console.log('success listen…6010');