const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist')
}

module.exports = {
  entry: {
    bundle: `${PATHS.src}/index.js`,
    app: `${PATHS.src}/index2.js`,
  },
  output: {
    filename: '[name].[chunkhash].js', // [name] isso é um placeholder, serve como variável
    // a variável [hash] serve justamente para criar um hash e o navegador parar de cachear o arquivo
    // a variável [chunkhash] gera um hash diferente somente se o arquivo foi alterado 
    path: PATHS.build
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true
    /*
      era feito por plugins, agora não é mais
      new webpack.optimize.UglifyJsPlugin()
    */
  }
  ,
  mode: 'development'
}