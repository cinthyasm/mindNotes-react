const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: ['./app.jsx'],
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
   devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js','.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'src/'),
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpg|jpeg|gif)$/,
        exclude: [/node_modules/],
        loader: 'url-loader?limit=10000&name=./public/images/[name].[ext]'
      },
      {
        test: /\.(svg|ico|png)$/,
        exclude: [/node_modules/],
        loader: 'url-loader?limit=10000&name=./public/images/[name].[ext]'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'index.html'
  }),
  new StyleLintPlugin({
    syntax: 'scss'
  })
  ]
}