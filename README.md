# Rocketseat OmniStack 11

https://rocketseat.com.br/week/aulas/11.0


## <a name="indice">Índice</a>

1. [23/03 - Conhecendo a OmniStack](#parte1)     
2. [24/03 - Criando a base da aplicação](#parte2)     
3. [25/03- Construindo a interface web](#parte3)     
4. [26/03 - Desenvolvendo o app mobile](#parte4)     
5. [27/03 - Funcionalidades avançadas](#parte5)     
---


## <a name="parte1">1 - 23/03 - Conhecendo a OmniStack</a>

- Link da Aula: https://youtu.be/Hfe28D4cFQA

- Apresentar a Aplicação:

![Apresentar a Aplicação 1](imgs/1-1-apresentacao.jpg)

![Apresentar a Aplicação 2](imgs/1-2-apresentacao.jpg)

![Apresentar a Aplicação 3](imgs/1-3-apresentacao.jpg)

![Apresentar a Aplicação 4](imgs/1-4-apresentacao.jpg)


- Configurar ambiente de desenvolvimento
  - Node & NPM
    - https://nodejs.org/
    - https://www.npmjs.com/
  - Visual Studio Code
- Entender sobre o Back-end & Front-End

![Back-end](imgs/1-5-backend.jpg)

- Criar projeto com Node.js
```
npm init -y

npm install express

node index.js
```

```js
const express = require('express');

const app = express();

app.get('/', (request, response)=> {
    //response.send("Olá Mundo!!");
    response.json({
        evento: "OmniStak 11",
        aluno: "José Malcher Jr."
    })
});

app.listen(3333);

```

- Entender sobre REACT & SPA

![Entendendo REACT e SPA](imgs/1-6-entendendo-react.jpg)

![Entendendo REACT e SPA](imgs/1-7-entendendo-react.jpg)

- Criar projeto com ReactJS

```
npx create-react-app frontend

npm start
```

- Entender Sobre React Native & EXPO

![Entendendo React Native e Expo](imgs/1-8-entendendo-react-native-expo.jpg)

![Entendendo React Native e Expo](imgs/1-9-entendendo-react-native-expo.jpg)

![Entendendo React Native e Expo](imgs/1-10-entendendo-react-native-expo.jpg)

![Entendendo React Native e Expo](imgs/1-11-entendendo-react-native-expo.jpg)



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - 24/03 - Criando a base da aplicação</a>

- Node.js & Express
  - Rotas e recursos
  - Métodos HTTP
  - Tipos de Parâmetros
- Utilizando o Insomnia

```
/*
*   Rota / Recuso
*   app.get('/users', (request, response)=> {});
*/

/*
* Método HTTP
*
* GET: Buscauma informação do Back-end
* POST: Criar uma informação no back-end
* PUT: Alterar
* DELETE: Deletar
*
*/

/*
*   Tipos de Parâmetros
*
*  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
*  Route Params: Parâmetros utilizados para identificar recursos
*  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*
* */

```

- Configurando Nodemon

```
npm install nodemon -D

```

```
// aula1/backend/package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

```
npm start

> nodemon index.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`

```

- Diferenças entre banco de dados
- Configurando Banco de dados

```
/*
*  SQL: MySQL, SQLite, PostgreSQL, Oracle, M. SQL Server
*  NoSQL: MOngoDB, CouchDB, etc.
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
* - http://knexjs.org/
*   npm install knex --save
* 
*/

```

```
npx knex init
Created ./knexfile.js

```

```
// aula1/backend/knexfile.js

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    }
  },
```


- Pensando nas entidades e funcionalidades
- Construção do back-end
- Adicionando módulo CORS
- Enviando Back-end ao Github

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - 25/03- Construindo a interface web</a>



[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - 26/03 - Desenvolvendo o app mobile</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - 27/03 - Funcionalidades avançadas</a>



[Voltar ao Índice](#indice)

---

