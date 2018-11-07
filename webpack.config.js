const {resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'babel-preset-env',
                                'babel-preset-react',
                                'stage-0'
                            ],
                            plugins: [
                                'react-hot-loader/babel',
                                'transform-object-rest-spread',
                                'transform-class-properties',
                                'syntax-dynamic-import',
                            ],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /(node_modules)/,
                use: [
                    {loader: 'file-loader'},
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new AsyncChunkNames()
    ],
    devServer: {
        hot: true,
        port: 2439
    }
};
