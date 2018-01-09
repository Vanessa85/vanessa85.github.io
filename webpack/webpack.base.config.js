const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const paths = {
  srcIndex: path.resolve(__dirname, '../src/app/index.js'),
  dist: path.resolve(__dirname, '../dist'),
  appPublic: path.resolve(__dirname, '../src/public')
};

const config = {
  entry: {
    app: paths.srcIndex
  },
  output: {
    filename: '[name].js',
    path: paths.dist,
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    contentBase: paths.appPublic
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(paths.appPublic, 'index.html')
    })
  ]
};

module.exports = config;
