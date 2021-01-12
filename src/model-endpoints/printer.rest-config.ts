import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Printer} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Printer,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/printers',
};
module.exports = config;
