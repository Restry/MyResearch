var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var debug = process.env.ENVDEBUG;

module.exports = {
  entry: {
    //app: path.resolve(SRC_PATH, 'index.jsx'),
    dashborad: path.resolve(SRC_PATH, 'js/pages/dashboard.js'),
    boostrap3: ['bootstrap3'],
    jquery: ['jquery']
  },
  output: {
    path: BUILD_PATH,
    filename: '[chunkhash:8].[name].js',
    publicPath: '/',
    chunkFilename: "js/[chunkhash:8].chunk.js"
  },
  //enable dev source map
  devtool: '#source-map',
  //enable dev server
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true
  // },
  resolve: {
    // root: [path.resolve('./src/js')],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // {
      //   test: /\.jsx?$/,
      //   loaders: ['babel'],
      //   include: SRC_PATH
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", 'sass-loader')
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.html$/,
        loader: "html?-minimize"
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq 
      $: 'jquery',
      jQuery: "jquery",
      Raphael: "raphael"
    }),
    debug ? function() {} : new webpack.optimize.UglifyJsPlugin({ //压缩代码
      compress: {
        warnings: false
      },
      sourceMap: true,
      mangle: true,
      except: ['$super', '$', 'exports', 'require'] //排除关键字
    }),
    new HtmlwebpackPlugin({
      title: 'Global services platform',
      filename: '/index.html', //生成的html存放路径，相对于 path
      template: './src/views/_layouts.html', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
      chunks: ['jquery', 'bootstrap3', 'dashborad'],
    }),

    new ExtractTextPlugin("css/[name].css", {
      publicPath: '/css/',
      allChunks: true
    }), //单独使用style标签加载css并设置其路径
    // new ExtractTextPlugin("img/[name].css"),    //单独使用style标签加载css并设置其路径

    new webpack.optimize.CommonsChunkPlugin({
      name: ['bootstrap3', 'jquery'],
      filename: "js/[chunkhash:8].[name].js",
      minChunks: Infinity
    })
  ]
}