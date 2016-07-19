var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry: {
    //app: path.resolve(APP_PATH, 'index.jsx'),
    dashborad:path.resolve(APP_PATH,'dashboard.js'),
    vendors: ['jquery','bootstrap']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js',
    publicPath: '/',
    chunkFilename: "[chunkhash:8].chunk.js"
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
     // root: ['app'],
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // {
      //   test: /\.jsx?$/,
      //   loaders: ['babel'],
      //   include: APP_PATH
      // },
      {
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", 'sass-loader') 
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
      },
      { test: /\.html$/, loader: "html?-minimize" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
          test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({	//加载jq 
            $: 'jquery',
            jQuery:"jquery",
            Raphael:"raphael"
    }),
    // new webpack.optimize.UglifyJsPlugin({	//压缩代码
    //       compress: {
    //           warnings: false
    //       }, 
    //       sourceMap: false,
    //       mangle: false,
    //       except: ['$super', '$', 'exports', 'require']	//排除关键字
    //   }),
    new HtmlwebpackPlugin({
      title: 'Global services platform',
      filename: '/index.html',    //生成的html存放路径，相对于 path
      template: './app/views/_layouts.html',    //html模板路径
      inject: true,    //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true,    //为静态资源生成hash值
      chunks: ['dashborad', 'vendors'],
    }),

    new ExtractTextPlugin("css/[name].css"),    //单独使用style标签加载css并设置其路径
   // new ExtractTextPlugin("img/[name].css"),    //单独使用style标签加载css并设置其路径

		new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
  ]
}
