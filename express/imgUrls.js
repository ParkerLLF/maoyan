//引入express框架
let express = require("express");
//获得express对象
let app = express();
//设置路由

app.get('/get', function (req, res) {

    let imgUrls =  [
        '../../imgs/roll1.png',
        '../../imgs/roll2.png',
        '../../imgs/roll3.png',
    ]


    //对象转为字符串
    let data = JSON.stringify(imgUrls);


    console.log(data);

    res.end(data);
});

1


//进行监听
app.listen(8890);