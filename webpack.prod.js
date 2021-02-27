const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false, 
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'eNote',
            template: path.resolver(__dirname, 'public', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})