var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  quiet: true,
  entry: [
    './src/js/app'
  ],
  output: {
    path: __dirname + '/dist/js/',
    filename: 'app.min.js',
    publicPath: '/js/'
  },
       devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, './src/js/')
    }]
  },
  plugins: [
   
            new HtmlwebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
