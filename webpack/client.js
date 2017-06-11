const path = require('path');

module.exports = {
    // JavaScript [React JSX with Babel]
    entry: './src/app.jsx',
        output: {
        filename: 'js/bundle.js',
        path: `${path.resolve('./')}/dist/`,
        publicPath: '/'
},
    module: {
        rules: require('./rules')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    plugins: require('./plugins')
};