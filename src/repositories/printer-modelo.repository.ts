import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PrinterModelo, PrinterModeloRelations, Printer} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PrinterRepository} from './printer.repository';

export class PrinterModeloRepository extends DefaultCrudRepository<
  PrinterModelo,
  typeof PrinterModelo.prototype.id,
  PrinterModeloRelations
> {

  public readonly printers: HasManyRepositoryFactory<Printer, typeof PrinterModelo.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PrinterRepository') protected printerRepositoryGetter: Getter<PrinterRepository>,
  ) {
    super(PrinterModelo, dataSource);
    this.printers = this.createHasManyRepositoryFactoryFor('printers', printerRepositoryGetter,);
    this.registerInclusionResolver('printers', this.printers.inclusionResolver);
  }
}
