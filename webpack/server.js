const path = require('path');

const SERVER_PATH = path.resolve('src/js/server');

module.exports = {
    entry: {
        "server": `${SERVER_PATH}/index.jsx`
    },
    target: 'node',
    output: {
        filename: 'server.js',
        path: `${path.resolve('./')}/dist/`,
        publicPath: '/'
    },
    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
    // Add the loader for .ts files.
    module: {
        rules: require('./rules')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    plugins: require('./plugins')
};