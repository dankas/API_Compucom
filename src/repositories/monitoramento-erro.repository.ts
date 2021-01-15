import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {MonitoramentoErro, MonitoramentoErroRelations} from '../models';

export class MonitoramentoErroRepository extends DefaultCrudRepository<
  MonitoramentoErro,
  typeof MonitoramentoErro.prototype.id,
  MonitoramentoErroRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MonitoramentoErro, dataSource);
  }
}
