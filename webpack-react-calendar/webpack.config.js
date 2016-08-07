var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        //      index: path.resolve(APP_PATH, 'index.jsx'),
        app: path.resolve(APP_PATH, 'app.jsx'),
        react: ["react"],
        "react-dom": ["react-dom"],
        "react-router": ["react-router"],
        jquery: ["jquery"]

    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js',
        publicPath: '',
        chunkFilename: "js/[chunkhash:8].[name].js"
    },
    //enable dev source map
    devtool: 'source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.min.js'],
        alias: {
            // "react": path.resolve(APP_PATH, 'lib/react'),
            // "react-dom": path.resolve(APP_PATH, 'lib/react-dom'),
            // "jquery": path.resolve(APP_PATH, 'lib/jquery'),
            "calendar": path.resolve(APP_PATH, 'lib/calendar.js'),
            "jstz": path.resolve(APP_PATH, 'lib/jstz'),
            //   "underscore": path.resolve(APP_PATH, 'lib/underscore')
        }
    },
    module: {
        noParse: [
            path.join(APP_PATH, "lib")
        ],
        loaders: [{
            test: /\.(jsx|js)?$/,
            loaders: ['babel'],
            include: APP_PATH,
            exclude: path.resolve(APP_PATH, 'lib')
        }, {
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
            loader: 'url?limit=8192&name=../images/[hash:8].[name].[ext]'
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=../fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({ //加载jq 
            React: 'react',
            ReactDOM: "react-dom",
            $: "jquery",
            "jQuery": "jquery"
        }),
        new HtmlwebpackPlugin({
            title: 'My second react app',
            filename: '/index.html', //生成的html存放路径，相对于 path
            template: './app/layouts.html', //html模板路径
            inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
            hash: true, //为静态资源生成hash值
            chunks: ["react-router", 'app', 'react', 'react-dom', 'jquery']
        }),
        //     new HtmlwebpackPlugin({
        //     title: 'My second react app',
        //     filename: '/app.html', //生成的html存放路径，相对于 path
        //    // template: './src/views/search.hbs', //html模板路径
        //     inject: true, //允许插件修改哪些内容，inject: true, 包括head与body   inject: head, 只到head
        //     hash: true, //为静态资源生成hash值
        //     chunks: ['app']
        //     }),
        new ExtractTextPlugin("css/[name].css", {
            publicPath: 'css/',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react'],
            filename: "js/[chunkhash:8].[name].js",
            minChunks: Infinity
        })
    ]
}