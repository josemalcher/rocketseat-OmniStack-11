const express = require('express');
const routes  = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
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

/*
*  SQL: MySQL, SQLite, PostgreSQL, Oracle, M. SQL Server
*  NoSQL: MOngoDB, CouchDB, etc.
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
* - http://knexjs.org/
* */




