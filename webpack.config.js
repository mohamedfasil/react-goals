
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: {
    js: './app/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.(html|png|jpg)$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader?modules&localIdentName=[local]&importLoaders=1&camelCase=dashes" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", 'babel-loader?'+JSON.stringify(
          {
            presets: ['react', 'es2015'],
            "plugins": [
              "syntax-class-properties",
              "syntax-decorators",
              "syntax-object-rest-spread",
              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        )]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: /(app)/,
        enforce: 'pre'
      }
    ]
  }
};