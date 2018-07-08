const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/app.js",
	
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        use: 'pug-loader'
      },
	  {
		  test: /\.html/,
        use: 'html-loader'
	  },
      {
        test: /\.styl/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: {
			loader:"file-loader",
			options:{
				outputPath: 'img/'
			}
		}
      },
      {
        test: /\.js$|\.es6$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Change there title of your project (title in browser tab caption)
      title: 'UIkit',
      hash: true,
      // Change there name of main |pug| file
      template: './src/index.pug'
    }),
    new webpack.optimize.UglifyJsPlugin({})
  ]
};