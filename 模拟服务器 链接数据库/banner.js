//引入express
var express = require('express');
//调用MySQL模块
var mysql = require('mysql');
//获得express对象
var app = express();
//设置静态文件
app.use(express.static('public'));
//首页数据
app.get("/banner", function(req, res) {
    //3,设置跨域访问
    app.all("*", function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", " 3.2.1");
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });
    //1，创建一个connection
    var connection = mysql.createConnection({
        host: 'cdb-a9y1iffo.cd.tencentcdb.com', //主机 ip
        user: 'root', //MySQL认证用户名
        password: 'cdhq1234', //MySQL认证用户密码
        port: '10055', //端口号
        database: 'express' //数据库里面的数据
    });

    //2,连接
    connection.connect();
    //3,编写sql语句
    // var sql = 'SELECT * FROM users';
    var sql = 'select * from banner'



    //4,进行查询操作
    /**
     *query，mysql语句执行的方法
     * 1，userAddSql编写的sql语句
     * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
     */
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        //把当前的对象转为字符串
        let data = JSON.stringify(result);
        res.end(data);
    });
    //5,连接结束
    connection.end();
});

//4,进行监听
app.listen(8889, function() {
    console.log('数据库连接 banner.js启动');
});