var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./js/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-0']
                }
            },
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};