const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ["./src/js/App.js"],
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.ImagesLoader
   
    ]
  },
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 9000
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.HtmlWebpackPlugin,
  ],
};