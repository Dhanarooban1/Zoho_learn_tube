const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: {
    content: './src/Frontend/content.js',
    background: './src/Backend/background.js', 
    popup: './src/Frontend/popup.js',
    ui: './src/Frontend/Ui.js',
    gemini:"./src/Frontend/Gemini.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js' // Generate separate bundles for each entry point
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: './src/Frontend/index.html', 
      filename: 'index.html', 
      chunks: ['popup',"ui","gemini"]
    })
  ],
  resolve: {
    extensions: ['.js']
  }
};
