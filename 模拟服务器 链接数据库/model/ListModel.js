let BaseSql = require("./BaseSql");
class ListModel extends BaseSql {

    constructor() {
        super();
    }

    getList(call) {
        //3,编写sql语句
        let sql = 'SELECT * FROM list';

        //4,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);

        });
        //5,连接结束
        //this.connection.end();
    }
}
module.exports = ListModel;