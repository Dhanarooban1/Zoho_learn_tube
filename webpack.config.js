const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', 
  entry: {
    content: './src/Frontend/content.js',
    background: './src/Backend/background.js', 
    popup: './src/Frontend/popup.js',
    ui: './src/Frontend/Ui.js',
    gemini:"./src/Frontend/Gemini.js",
    gc:'./src/Frontend/Course.js',
    BaseImage:'./src/Frontend/BaseImage.js',
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
      chunks: ["BaseImage","content",'popup',"ui","gemini","gc"]
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ['.js']
  },
};
