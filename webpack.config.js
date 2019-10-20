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
    filename: '[name].js',
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
  mode: 'development'
}