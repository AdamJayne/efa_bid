const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/react_app/index.jsx',
    output: {
        path: resolve('../public/dist'),
        filename: 'bundle.js',
        publicPath: resolve('../public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/react', '@babel/env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    }
};

module.exports = config;