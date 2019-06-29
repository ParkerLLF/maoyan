// pages/movie/movie.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    target: function () {
        wx.navigateTo({
            url: '../movie/movie',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let row;
        let ban;
        let imgu;
        let that = this;
        // 获取list数据
        wx.request({
            url: 'http://localhost:8888/get',
            success(res) {
                //将获取的数据传给'row'
                row = res.data;
                // console.log("通过res获取数据 并将获取的数据传给'row'")
                // console.log("----------输出所有数据----------");
                // console.log(row);
                // console.log("----------根据数组下标输出具体的一组数据----------");
                // console.log(row[0])
                // console.log("----------输出一组数据中的具体项----------");
                // console.log(row[0].name);
                // console.log(row[0].score);
                // console.log(row[0].img);
                // console.log(row[0].date);
                console.log("------------将获取的数据传给'row'-----------");
                that.setData({
                    list: row,
                });
                // console.log("----------输出----------");
                // console.log("---------bottom---------");
            }
        });

        // 获取banner数据
        wx.request({
            url: 'http://localhost:8889/get',
            success(res) {
                console.log("-----------获取banner数据---------");
                ban = res.data;
                console.log(ban)
                that.setData({
                    banner: ban,
                })
            }
        })

        // 获取轮播图数据
        wx.request({
            url: 'http://localhost:8890/get',
            success(res) {
                console.log("-----------获取轮播图数据---------");
                imgu = res.data;
                console.log(imgu)
                that.setData({
                    imgUrls: imgu,
                })
            }
        })


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})