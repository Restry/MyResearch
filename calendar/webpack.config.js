
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path:"dist",
    publicPath: ''
  },
/*
import React from 'react';
import ReactDOM from 'react-dom';
 */
  devServer: { 
    host:"0.0.0.0"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", 'sass-loader']
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq 
      React: 'react',
      ReactDOM: "react-dom"
    }),
    
    new HtmlwebpackPlugin({
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './react.html', //html模板路径
      inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
      hash: true, //为静态资源生成hash值
    })
    ]
}
