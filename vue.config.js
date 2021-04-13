// // npm install terser-webpack-plugin@4.2.3
// const TerserPlugin = require("terser-webpack-plugin");
// const isProd = process.env.NODE_ENV === "production";

// module.exports = {
//   lintOnSave: process.env.NODE_ENV !== "production",
//   productionSourceMap: process.env.NODE_ENV !== "production",
//   configureWebpack: {
//     optimization: {
//       minimize: isProd,
//       minimizer: isProd
//         ? [
//             new TerserPlugin({
//               terserOptions: {
//                 compress: {
//                   drop_console: true,
//                 },
//                 output: {
//                   comments: false,
//                 },
//               },
//             }),
//           ]
//         : [],
//     },
//   },
// };

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
    // ? '/여기에-원하는-경로명-입력/'
    // : '/'
  outputDir: './docs',
  publicPath: '/braintraining/'
}
