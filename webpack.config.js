const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
  mode: "development",
  entry: {
    scripts: './src/js/scripts.js',
  },
  output: {
    filename: '[name].js',//[contenthash], [hash]
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['js', 'json'],//чтобы расширения не писать при импорте
    alias: {
      '@models': path.resolve(__dirname, './src/models/'),//чтобы импортировать относительные пути: @models/Model.js
      '@': path.resolve(__dirname, './src/'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 2000,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      }
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, 'src/favicon.ico'),
    //     to: path.resolve(__dirname, 'dist')
    //   }
    // ]),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }
}