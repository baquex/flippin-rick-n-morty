"use strict";

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


/** @type {import ('webpack').Configuration} */

const path = require("path");

module.exports = {
  entry: "./src/index.js", 
  output: { 
    path: path.resolve(__dirname, "../dist"), 
    filename: "[name].[contenthash].js", //uses default main as Name and adds hash
    publicPath: ""
  },
  module: {
    rules: [
      {
        use: "babel-loader", 
        test: /.(js|jsx)$/, 
        exclude: /node_modules/
      }, 
      {
        type: "asset",
        test: /\.(png|svg|jgp|jpeg|gif)$/i,
        exclude: /node_modules/
      }
    ]
  }, 
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }, 
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
  

}