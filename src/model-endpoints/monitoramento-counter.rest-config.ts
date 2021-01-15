import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {MonitoramentoCounter} from '../models';

const config: ModelCrudRestApiConfig = {
  model: MonitoramentoCounter,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/monitoramento-counters',
};
module.exports = config;
