const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('/css/bundle.css');
const loaders = [
    {
        loader: 'css-loader?name=css/[name].[ext]'
    },
    {
        loader: 'sass-loader?name=css/[name].[ext]'
    }
];
// main app dir
const APP_DIR = path.resolve(__dirname, 'src/js/');

module.exports = [{
    // JavaScript [React JSX with Babel]
    entry: './src/js/app.jsx',
    output: {
        filename: 'bundle.js',
        path: `${path.resolve("./")}/dist/js`,
        publicPath: '/dist/js/'
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
    },
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
        new webpack.optimize.UglifyJsPlugin()]
    // CSS [SASS and image, font laoders]
}, {
    entry: {
        css: `${path.resolve('./src')}/css/main.scss`
    },
    output: {
        filename: 'bundle.css',
        path: `${path.resolve("./")}/dist/`,
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader?name=css/[name].[ext]',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: loaders
                })
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                use: "url-loader?limit=1024&name=images/[hash].[ext]?[hash]"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [extractCSS]
}];
