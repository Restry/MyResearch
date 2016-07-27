var path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    path: "dist",
    filename: "bundle.js"
  },
	module: {
		loaders: [{ test: /\.handlebars$/, loader: __dirname + "/../../?helperDirs[]=" + __dirname + "/helpers" }]
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template using Handlebars',
      template: '_layouts.hbs'
    })
  ]
};