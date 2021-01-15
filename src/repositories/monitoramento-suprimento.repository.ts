import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {MonitoramentoSuprimento, MonitoramentoSuprimentoRelations} from '../models';

export class MonitoramentoSuprimentoRepository extends DefaultCrudRepository<
  MonitoramentoSuprimento,
  typeof MonitoramentoSuprimento.prototype.id,
  MonitoramentoSuprimentoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MonitoramentoSuprimento, dataSource);
  }
}
