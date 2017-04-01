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
// main app dir
const APP_DIR = path.resolve(__dirname, 'src/js/');

module.exports = [{
    // JavaScript [React JSX with Babel]
    entry: './src/js/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '../../'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
    // CSS [SASS and image, font laoders]
}, {
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
