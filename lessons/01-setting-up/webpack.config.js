module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  devServer: { 
    host:"0.0.0.0"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
