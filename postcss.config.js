module.exports = {
  pugins: {
    autoprefixer: {
      //css兼容前缀
      overrideBrowserslist: [
        // 'Android 4.1',
        // 'iOS 7.1',
        // 'Chrome >31',
        // 'not id <=11'
      ],
    },
    "postcss-pxtorem": {
      rootValue: 37.5, //这个值为设计稿的宽
      unitPrecision: 5, // 转化为rem后保留的小数
      replace: true, //rem替换px
      mediQuery: true, //兼容媒体查询 允许在媒体查询中转换px
      minPixelValue: 6, //设置要替换的最小像素值
      exclude: /node_modules/i, //node_modules
    },
  },
}
