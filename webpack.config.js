// подключаем утилиту относительного пути
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
  {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader']
       },
       {
        test: /\.(png|woff|woff2|jpg|gif|ico|svg)$/, // добавил woff и woff 2
        use: [
                'file-loader?name=../dist/images/[name].[ext]', // указали папку, куда складывать изображения
                {
                        loader: 'image-webpack-loader',
                        options: {}
                },
        ]
 }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
        filename: 'index.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};