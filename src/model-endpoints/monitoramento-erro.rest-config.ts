import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {MonitoramentoErro} from '../models';

const config: ModelCrudRestApiConfig = {
  model: MonitoramentoErro,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/monitoramento-erros',
};
module.exports = config;
