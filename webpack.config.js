const path = require('path');

const paths = {
  srcIndex: path.resolve(__dirname, 'src/app/index.js'),
  dist: path.resolve(__dirname, 'dist'),
  appPublic: path.resolve(__dirname, 'src/public')
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
    contentBase: paths.appPublic
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  }
};

module.exports = config;
