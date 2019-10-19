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

ou adicione um comando dentro do package json para executar diretamente um
```
$ webpack-cli src/index.js --output dist/bundle.js
```