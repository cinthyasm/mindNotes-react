const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './app.jsx',
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    extensions: ['.js','jsx', '.json']
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
          'css-loader?importLoaders=2',
          'sass-loader',
        ],
      }
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