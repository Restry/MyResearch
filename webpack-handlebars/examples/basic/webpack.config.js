var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./app.js",
  output: {
    path: "dist",
    filename: "bundle.js"
  },
  resolve: {
    fallback: path.join(__dirname, "helpers")
  },
	module: {
		loaders: [
    //  { test: /\.handlebars$/, loader: __dirname + "/../../" },
      { test: /\.handlebars$/, loader: "handlebars" },
     { test: /\.hbs$/, loader: "handlebars" }]
	},
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Custom template using Handlebars',
   //   template: '_layouts.js'
     template: 'book-listing.handlebars'
      
    })
  ]
};