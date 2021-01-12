import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Cliente} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Cliente,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/clientes',
};
module.exports = config;
