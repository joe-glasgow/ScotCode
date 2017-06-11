const ExtractTextPlugin = require('extract-text-webpack-plugin');
const APP_DIR = require('path').resolve("src");

module.exports = [
    {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader?htmlmin'
    },
    {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [{loader: 'babel-loader'}]
    }, {
        test: /\.json$/,
        use: [{loader: 'json-loader'}]
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }, {
                loader: 'sass-loader'
            }]
        })
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            {loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'},
            {
                loader: 'img-loader',
                options: {
                    enabled: process.env.NODE_ENV === 'production'
                }
            }
        ]
    },
    {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use:[{loader: 'file-loader?name=fonts/[name].[ext]'}]
    }
];