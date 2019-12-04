/* webpack.config.js */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Tell webpack to begin building its 
  // dependency graph from this file.
  entry: {
    newCssApproach: path.join(__dirname, 'src', 'newCssApproach', 'index.js'),
    oldStyledComponentsApproach: path.join(__dirname, 'src', 'oldStyledComponentsApproach', 'index.js'),
  },
  // And to place the output in the `build` directory
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        /* We'll leave npm packages as is and not 
           parse them with Babel since most of them 
           are already pre-transpiled anyway. */
        exclude: /node_modules\/(?!cap-ui|react-rasta)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['airbnb'],
            plugins: ['babel-plugin-styled-components']
          },
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['newCssApproach'],
      template: path.join(__dirname, 'public', 'newCssApproach.html'),
      filename: 'newCssApproach.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['oldStyledComponentsApproach'],
      template: path.join(__dirname, 'public', 'oldStyledComponentsApproach.html'),
      filename: 'oldStyledComponentsApproach.html'
    }),
  ]
}