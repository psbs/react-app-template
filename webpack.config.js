const webpack = require('webpack');
const path = require('path');
 
const BUILD_DIR = path.resolve(__dirname, 'public/js');
const APP_DIR = path.resolve(__dirname, 'src/app');
 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'public/pages/index.html',
  filename: 'index.html',
  inject: 'body'
})


const config = {
    entry: {
        index: APP_DIR + '/index.js'
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module : {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader'
              }
            }
          ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
 
module.exports = config;