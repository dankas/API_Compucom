import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {MonitoramentoUso, MonitoramentoUsoRelations} from '../models';

export class MonitoramentoUsoRepository extends DefaultCrudRepository<
  MonitoramentoUso,
  typeof MonitoramentoUso.prototype.id,
  MonitoramentoUsoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MonitoramentoUso, dataSource);
  }
}
