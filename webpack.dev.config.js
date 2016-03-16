var webpack = require("webpack")
var path = require("path")
// webpack中生成HTML的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 将样式提取到单独的css文件里，而不是将样式打包到js文件里了。
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var projectRoot = path.resolve(__dirname, "src")
module.exports = {
  entry: "./src/app.js", // 入口文件
  output: {
    path: path.resolve(__dirname, "build"),  // 输出目录
    // publicPath: "build/", // 模板、样式、脚本、图片等资源对应的server上的路径
    filename: "bundle.js",  // 生成的脚本文件名称
    sourceMapFilename: "[file].map" // sourceMap文件名
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
  debug: true,
  devtool: "eval-source-map",
  plugins: [
    // new webpack.ProvidePlugin({ // 加载jquery，模块无需再引入jquery
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // }),
    new HtmlWebpackPlugin({
      title: "My blog with vue",
      template: "./src/index.html", // 指定模板生成文件
      inject: 'body', // js插入的位置
      hash: true, // 为静态资源生成hash值
    }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.HotModuleReplacementPlugin(), //热加载
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  // webpack-dev-server配置
  devServer: {
    contentBase: "./build",
    host: "localhost",
    port: 8081,
    inline: true, // 可以监控js变化
    hot: true,
    open: true,
    colors: true
  }
}
