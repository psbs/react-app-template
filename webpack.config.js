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
        family_view_create: APP_DIR + '/family_view_create.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
 
module.exports = config;