//引入express框架
let express = require("express");
//获得express对象
let app = express();
//设置路由

app.get('/get', function (req, res) {

    let banner = [{
            name: "0元看电影",
            img: "../../imgs/bpic01.png"
        }, {
            name: "签到必领券",
            img: "../../imgs/bpic02.png"
        }, {
            name: "赢PS4",
            img: "../../imgs/bpic03.png"
        }, {
            name: "开心麻花",
            img: "../../imgs/bpic04.png"
        },

    ]

    //对象转为字符串
    let data = JSON.stringify(banner);


    console.log(data);

    res.end(data);
});

1


//进行监听
app.listen(8889);