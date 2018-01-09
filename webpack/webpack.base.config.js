const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const paths = {
  root: path.resolve(__dirname, '..'),
  srcIndex: path.resolve(__dirname, '../src/app/index.js'),
  dist: path.resolve(__dirname, '../dist'),
  appPublic: path.resolve(__dirname, '../src/public')
};

const base = {
  entry: {
    app: paths.srcIndex
  },
  output: {
    filename: 'static/js/[name].js',
    path: paths.dist,
    publicPath: '/'
  },
  devServer: {
    port: 4000,
    host: '192.168.0.15',
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
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(paths.appPublic, 'favicon.png'),
      prefix: 'static/icons-[hash]/',
      persistentCache: true,
      inject: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]
};

module.exports = { base, paths };
