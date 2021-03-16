const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const {GenerateSW} = require('workbox-webpack-plugin');


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
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
    ],

})