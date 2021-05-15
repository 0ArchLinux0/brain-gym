const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  outputDir: './docs',
  publicPath: '/',
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
  },
  // devServer: { proxy: 'http://ec2-54-180-90-248.ap-northeast-2.compute.amazonaws.com:1000'
  //   // proxy: { // proxyTable 설정
  //   //     // '/api': { // api 로 시작하는 소스 는 traget으로 잡아준다. > 사용할때 url 이 api 가 있어야 한다.
  //   //     //     target: process.env.VUE_APP_PROD_BASE_DOMAIN, // www.xxx.com
  //   //     //     changeOrigin: true
  //   //     // },
  //   //     //  '/aw': { // aw로 url 이 시작하면 이렇게 target을 잡아준다. 
  //   //     //     target: process.env.VUE_APP_PROD_AW_DOMAIN,
  //   //     //     changeOrign: true
  //   //     // }, 

  //   // }
  // }
}
