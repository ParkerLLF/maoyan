//引入express框架
let express = require("express");
//获得express对象
let app = express();
//设置路由

app.get('/get', function (req, res) {

    let list = [{
            name: "扫毒",
            score: "8.6",
            img: "../../imgs/mpic01.png",
            date: "7月5日"
        }, {
            name: "绝杀慕尼黑",
            score: "9.6",
            img: "../../imgs/mpic02.png",
            date: "7月5日"
        }, {
            name: "哥斯拉2",
            score: "8.4",
            img: "../../imgs/mpic03.png",
            date: "7月5日"

        }, {
            name: "最好的我们",
            score: "8.4",
            img: "../../imgs/mpic04.png",
            date: "7月5日"
        }, {
            name: "蜘蛛侠：英雄远征",
            score: "9.5",
            img: "../../imgs/mpic05.png",
            date: "7月5日"
        }, {
            name: "千与千寻",
            score: "9.4",
            img: "../../imgs/mpic06.png",
            date: "7月5日"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png",
            date: "7月5日"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png",
            date: "7月5日"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png",
            date: "7月5日"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png",
            date: "7月5日"
        }, {
            name: "黑衣人：全球通缉",
            score: "7.8",
            img: "../../imgs/mpic07.png",
            date: "7月5日"
        }, {
            name: "玩具总动员4",
            score: "9.2",
            img: "../../imgs/mpic08.png",
            date: "7月5日"
        }];

        //对象转为字符串
        let data = JSON.stringify(list);
        

    console.log(data);

    res.end(data);
});

1


//进行监听
app.listen(8888);