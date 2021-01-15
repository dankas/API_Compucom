import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {MonitoramentoUso} from '../models';

const config: ModelCrudRestApiConfig = {
  model: MonitoramentoUso,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/monitoramento-usos',
};
module.exports = config;
