const path = require('path');

module.exports = {
  entry: {
    header: './src/js/header/scripts.js',
    footer: './src/js/footer/scripts.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}