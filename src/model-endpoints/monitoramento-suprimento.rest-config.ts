import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {MonitoramentoSuprimento} from '../models';

const config: ModelCrudRestApiConfig = {
  model: MonitoramentoSuprimento,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/monitoramento-suprimentos',
};
module.exports = config;
