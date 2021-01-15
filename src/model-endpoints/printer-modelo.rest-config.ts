import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {PrinterModelo} from '../models';

const config: ModelCrudRestApiConfig = {
  model: PrinterModelo,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/printer-modelos',
};
module.exports = config;
