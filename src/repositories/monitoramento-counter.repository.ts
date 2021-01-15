import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {MonitoramentoCounter, MonitoramentoCounterRelations} from '../models';

export class MonitoramentoCounterRepository extends DefaultCrudRepository<
  MonitoramentoCounter,
  typeof MonitoramentoCounter.prototype.id,
  MonitoramentoCounterRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MonitoramentoCounter, dataSource);
  }
}
