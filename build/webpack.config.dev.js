'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        loader: 'tslint-loader',
        options: {
          tsConfigFile: 'tsconfig.json',
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        enforce: 'post'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(scss|css)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: resolve('static/img'),
      to: resolve('dist/static/img'),
      toType: 'dir'
    }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}