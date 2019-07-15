const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/index.html',
  filename: 'index.html'
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  HtmlWebpackPlugin: HtmlWebpackPlugin,
};