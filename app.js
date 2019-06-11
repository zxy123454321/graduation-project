//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index");
const login=require("./routes/login");
const skip=require("./routes/skip");
const search=require("./routes/search");
const comment=require("./routes/comment");
const account=require("./routes/account");
const admin=require("./routes/admin");

//配置requirejs
var requirejs=require('requirejs');
requirejs.config({
    baseUrl:__dirname,
    name:"app",
    //把node自身的require方法传递给requirejs
    nodeRequire: require
});
requirejs(["foo","bar"],function(foo,bar){});

//定义define方法
if(typeof define !== 'function'){
    var define=require('amdefine')(module);
}

var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "text/html;charset=utf-8");
    next();
});

var server = app.listen(3000,()=>{
    console.log("success");
});
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/login",login);
app.use("/skip",skip);
app.use("/search",search);
app.use("/comment",comment);
app.use("/account",account);
app.use("/admin",admin);
