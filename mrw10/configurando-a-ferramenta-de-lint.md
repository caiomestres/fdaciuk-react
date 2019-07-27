-> 
criação do package.json só com {}
npm install --save-dev webpack@1
npm install -g webpack@1
criar arquivo webpack.config.js
criar src/index.js

@continuação mrw04
npm install --save-dev webpack-dev-server@1
npm install -g webpack-dev-server@1

publicPath é o local onde o webpack vai ficar assistindo o arquivo de desenvolvimento, em memória

pra rodar o server do webpack
webpack-dev-server

@continuação mrw05
npm install --save react@15.4 react-dom@15.4
pra não usar cdn

toda vez que você usa um id, você cria uma variável pendurada no window

@continuação mrw06
npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6

@continuação mrw07
npm install --save-dev babel-preset-react@6

@continuação mrw08
npm install --save-dev react-hot-loader@3.0.0-beta.2
criar o server.js
passar um monte de dados lá pra não precisar usar mais webpack-dev-server

@continuação mrw09
trabalhar com um dos conceitos da programação funcional, que é a imutabilidade, logo, usar const, e pq var tem um hoisting diferente tb

@continuação mrw10

npm install --save-dev standard standard-loader@4
npm install --save-dev webpack-validator