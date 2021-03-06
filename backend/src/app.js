const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 *  Métodos HTTP:
 * 
 *  GET: Buscar uma informação do back-end
 *  POST: Criar uma informação do back-end
 *  PUT: Alterar uma informação do back-end
 *  DELETE: Deletar uma informação do back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Pamâmetros nomeados enviados na rota após o símobolo '?' (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Drivers: SELECT * FROM users
    * Query Builder: table
    */

module.exports = app;