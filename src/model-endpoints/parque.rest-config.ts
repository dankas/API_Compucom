import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Parque} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Parque,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/parques',
};
module.exports = config;
