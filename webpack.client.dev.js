const fs = require('fs');
const path = require('path');
const url = require('url');
const webpack = require('webpack')

const WebpackShellPlugin = require('webpack-shell-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


const runServer = "webpack --watch --mode development --config "+ path.resolve(__dirname+'/webpack.server.dev');

const browserConfig = {
  mode:'development',
  stats:'normal',
  watch: true,
  entry: path.resolve(__dirname+'/src/app/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].client.js',
    chunkFilename: '[name].[contentHash].client.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader',exclude: /node_modules/ },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
   // new ManifestPlugin({publicPath:""}),

    new WebpackShellPlugin({onBuildStart:['echo "Webpack Client Start"'], onBuildEnd:[runServer]}),
  ],

}

module.exports = [browserConfig]