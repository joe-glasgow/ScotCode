const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const SERVER_PATH = path.resolve('src/js/server');

module.exports = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: true,
        minimize: true,
        compressor: {
            warnings: false,
            screw_ie8: true,
        },
    }),
    new OptimizeJsPlugin({
        sourceMap: true,
    }),
    new ExtractTextPlugin({
        filename: 'css/bundle.css',
        allChunks: true,
        disable: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
        { from: SERVER_PATH + '/views/**/*', to: "views/[name].[ext]" }
    ]),
    new webpack.NormalModuleReplacementPlugin(
        /\/iconv-loader$/,
        'node-noop'
    ),
    new webpack.ContextReplacementPlugin(
        /ejs[\/\\]lib$/,
        'node-noop'),
    new webpack.ContextReplacementPlugin(
        /express[\/\\]lib$/,
        'node-noop')
]