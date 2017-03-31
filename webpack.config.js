const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('./dist/css/bundle.css');
const loaders = [
    {
        loader: 'css-loader'
    },
    {
        loader: 'sass-loader'
    }
];


module.exports = [/*{
 // JS
 entry: './src/js/app.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist/js')
 },
 module: {
 rules: [
 {
 test: /\.js$/,
 exclude: /(node_modules|bower_components|dist)/,
 loader: 'babel-loader',
 query: {
 presets: ['es2015']
 }
 }
 ]
 }
 // CSS
 }, */{
    entry: {
        css: './src/css/main.scss'
    },
    output: {
        filename: './dist/css/bundle.css',
        publicPath: '../../'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: loaders
                })
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                use: "url-loader?limit=1024&name=dist/images/[hash].[ext]?[hash]"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=dist/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [extractCSS]
}];
