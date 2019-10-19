# Curso de webpack

## Comandos

instalar o webpack cli
```
$ npm i webpack && npm i webpack-cli
```

executar o webpack cli
```
$ node_modules\.bin\webpack src/index.js --output dist/bundle.js
```

ou adicione um comando dentro do package json
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack --config ./webpack.config.js"
  },
```
então será possível executar um _npm start_ e então o webpack será executado
```
$ npm start
```

no _webpack.config.js_ foi adicionado um module
```
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/, // aqui informa por regex qual seriam os arquivos afetados
        --use: {loader: 'url-loader'} // aqui o curso estava desatualizado
        use: [ // aqui informa qual pacote será utilizado para estes casos
          'file-loader'
        ]
      }
    ]
  }
```