const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  options: {
      configFile: __dirname + '/.babelrc'
    },
  }
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
};

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CSSLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        
      }
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    "sass-loader",
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      },
    },
  ],
};
const ImagesLoader = {
          
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
          outputPath: 'img/'
      }
    },
  ],
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
  ImagesLoader: ImagesLoader

};