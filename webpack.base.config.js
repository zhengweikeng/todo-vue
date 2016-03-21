var webpack = require("webpack")
var path = require("path")
// 将样式提取到单独的css文件里，而不是将样式打包到js文件里了。
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var projectRoot = path.resolve(__dirname, "src")
var env = process.env.NODE_ENV

module.exports = {
  entry: "./src/app.js", // 入口文件
  output: {
    path: path.resolve(__dirname, "build"),  // 输出目录
    filename: "bundle.js",  // 生成的脚本文件名称
  },
  resolve: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        include: projectRoot,
        loader: "eslint"
      }, {
        test: /\.js$/,
        loader: "eslint"
      }
    ],
    loaders: [
      {
        include: projectRoot,
        test: /\.vue$/,
        loader: "vue"
      }, {
        include: projectRoot,
        test: /\.js$/,
        loader: "babel"
      }, {
        //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        test: /\.(jpg|png|gif)$/,
        include: projectRoot,
        loader: "url",
        limit: 10240,
        name: "[name].[ext]?[hash]"  // 文件超出大小限制时的文件命名
      }, {
        // 文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
      }
    ]
  },
  vue: { // 配置vue
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      less: ExtractTextPlugin.extract("css!less")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
