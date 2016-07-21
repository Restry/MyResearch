module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' },
         {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
      },
      {
          test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      }

    ]
  }
}
