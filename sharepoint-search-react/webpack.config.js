var webpack = require("webpack");

module.exports = {
    entry: './js/app.jsx',
    output: {
        path: './build',
        filename: 'app.dist.js',
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    }
};