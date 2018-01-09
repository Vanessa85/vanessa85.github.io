const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { base, paths } = require('./webpack.base.config.js');

let config = Object.assign({}, base);
config.output.filename = 'static/js/[name].[chunkhash:8].js';

let cssLoader = config.module.rules[0].oneOf.find(x => String(x.test) === String(/\.css$/));
cssLoader.use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader'],
});

let sassLoader = config.module.rules[0].oneOf.find(x => String(x.test) === String(/\.scss$/));
sassLoader.use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
});

config.plugins = config.plugins || [];
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new ExtractTextPlugin({
    filename: 'static/css/[name].[contenthash:8].css',
  }),
  new CleanWebpackPlugin(['dist'], {
    root: paths.root
  })
);

module.exports = config;
