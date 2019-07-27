'use stric'

const path = require('path')

module.exports = {
  devtool: 'scource-map',

  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
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