/**
 * Created by zhouxiangbo on 2017/11/3 0003.
 * description:数据库文件
 */
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
var  mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/full');

// 为这次连接绑定事件
 var  db = mongoose.connection;
db.once('error',function(){console.log('Mongo 连接出错')});
db.once('open',function(){console.log('Mongo 已经成功连接')});

/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : Number,
    phone:Number
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema)
}

module.exports = Models;
