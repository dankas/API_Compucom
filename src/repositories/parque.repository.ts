import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Parque, ParqueRelations, Printer} from '../models';
import {PrinterRepository} from './printer.repository';

export class ParqueRepository extends DefaultCrudRepository<
  Parque,
  typeof Parque.prototype.id,
  ParqueRelations
> {

  public readonly printersnoparque: HasManyRepositoryFactory<Printer, typeof Parque.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PrinterRepository') protected printerRepositoryGetter: Getter<PrinterRepository>,
  ) {
    super(Parque, dataSource);
    this.printersnoparque = this.createHasManyRepositoryFactoryFor('printersnoparque', printerRepositoryGetter,);
    this.registerInclusionResolver('printersnoparque', this.printersnoparque.inclusionResolver);
  }
}
