'use stric'

const path = require('path')
const webpack = require('webpack')
module.exports = {
  devtool: 'scource-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
      //vai usar o babel pra pegar tudo que é js, excluir o que é node_modules, e incluindo só coisas da pasta src.
    }]
  }
}