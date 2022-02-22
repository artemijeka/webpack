const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    header: './src/js/header/scripts.js',
    footer: './src/js/footer/scripts.js',
  },
  output: {
    filename: '[name].bundle.js',//[contenthash], [hash]
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new HTMLWebpackPlugin({
    //   template: './src/index.html',
    // }),
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}