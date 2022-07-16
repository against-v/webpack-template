const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html'
  })
];

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins,
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  devServer: {
    port: 9000,
  },
};
