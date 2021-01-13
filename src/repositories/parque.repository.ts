import {DefaultCrudRepository} from '@loopback/repository';
import {Parque, ParqueRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ParqueRepository extends DefaultCrudRepository<
  Parque,
  typeof Parque.prototype.id,
  ParqueRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Parque, dataSource);
  }
}
