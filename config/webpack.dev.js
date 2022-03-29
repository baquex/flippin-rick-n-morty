const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
 
/** @type {import ('webpack').Configuration} */

const devConfig = {
  mode: 'development',
  devServer: {
    static:{
      directory: path.join(__dirname, '../dist')
    }, 
    compress: false, 
    port: 3000,
    open: true,
  },
  devtool: "eval-source-map",
  module:{
    rules:[
      {
        use: ["style-loader", "css-loader", "sass-loader"], 
        test: /.(css|sass|scss)$/,
        exclude: /node_modules/
      },  
    ]
  }, 
}

module.exports = merge(common, devConfig);