const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');



module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    "targets":"defaults"
                                }],
                                '@babel/preset-react',
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            import: true,
                            importLoaders: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('node-sass')
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: 'public/manifest.json', to: 'manifest.json'
              },
              {
                from: 'src/assets', to: 'images'
              },
              {
                from: 'src/registerServiceWorker.js', to: 'registerServiceWorker.js'
              },
            ]
        }),
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json', // Not to confuse with manifest.json 
        }),
        new GenerateSW(),
    ],
    optimization: {
        minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
            extractComments: true,
            parallel: true,
          }),
        ],
      },    
}