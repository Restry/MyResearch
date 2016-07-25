var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var debug = true;

module.exports = {
  entry: {
    index: path.resolve(SRC_PATH, 'js/index.js'),
    knowledge: path.resolve(SRC_PATH, 'js/knowledge.js'),
    jquery: ['localjquery']
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].js',
    publicPath: '',
    chunkFilename: "js/[chunkhash:8].[name].js"
  },
  //enable dev server
  devServer: {
    host: "0.0.0.0"
  },
  resolve: {
    // root: [path.resolve('./src/js')],
    extensions: ['', '.js', '.min.js'],
    alias: {
      "localjquery": path.resolve(SRC_PATH, 'js/lib/jquery.min.js')
    }
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=/images/img-[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq 
      $: 'localjquery',
      "jquery": "localjquery",
      jQuery: "localjquery",
      ko: "knockout"
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
      title: 'sops',
      filename: '/index.html', //生成的html存放路径，相对于 path
      template: './src/views/_layouts.html', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
      chunks: ['jquery', 'index'],
    }),
    new HtmlwebpackPlugin({
      title: 'sops',
      filename: '/knowledge.html', //生成的html存放路径，相对于 path
      template: './src/views/knowledge.html', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
      chunks: ['jquery', 'knowledge'],
    }),

    new ExtractTextPlugin("css/[name].css", {
      publicPath: 'css/',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['jquery'],
      filename: "js/[chunkhash:8].[name].js",
      minChunks: Infinity
    })
  ]
}