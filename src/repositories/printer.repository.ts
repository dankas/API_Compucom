/* eslint-disable @typescript-eslint/naming-convention */
import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {MonitoramentoCounter, MonitoramentoErro, MonitoramentoSuprimento, MonitoramentoUso, Printer, PrinterRelations} from '../models';
import {MonitoramentoCounterRepository} from './Monitoramento-counter.repository';
import {MonitoramentoErroRepository} from './Monitoramento-erro.repository';
import {MonitoramentoSuprimentoRepository} from './Monitoramento-suprimento.repository';
import {MonitoramentoUsoRepository} from './Monitoramento-uso.repository';

export class PrinterRepository extends DefaultCrudRepository<
  Printer,
  typeof Printer.prototype.id,
  PrinterRelations
> {

  public readonly MonitoramentoCounters: HasManyRepositoryFactory<MonitoramentoCounter, typeof Printer.prototype.id>;

  public readonly MonitoramentoErros: HasManyRepositoryFactory<MonitoramentoErro, typeof Printer.prototype.id>;

  public readonly MonitoramentoUsos: HasManyRepositoryFactory<MonitoramentoUso, typeof Printer.prototype.id>;

  public readonly MonitoramentoSuprimentos: HasManyRepositoryFactory<MonitoramentoSuprimento, typeof Printer.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MonitoramentoCounterRepository') protected MonitoramentoCounterRepositoryGetter: Getter<MonitoramentoCounterRepository>, @repository.getter('MonitoramentoErroRepository') protected MonitoramentoErroRepositoryGetter: Getter<MonitoramentoErroRepository>, @repository.getter('MonitoramentoUsoRepository') protected MonitoramentoUsoRepositoryGetter: Getter<MonitoramentoUsoRepository>, @repository.getter('MonitoramentoSuprimentoRepository') protected MonitoramentoSuprimentoRepositoryGetter: Getter<MonitoramentoSuprimentoRepository>,
  ) {
    super(Printer, dataSource);
    this.MonitoramentoSuprimentos = this.createHasManyRepositoryFactoryFor('MonitoramentoSuprimentos', MonitoramentoSuprimentoRepositoryGetter,);
    this.registerInclusionResolver('MonitoramentoSuprimentos', this.MonitoramentoSuprimentos.inclusionResolver);
    this.MonitoramentoUsos = this.createHasManyRepositoryFactoryFor('MonitoramentoUsos', MonitoramentoUsoRepositoryGetter,);
    this.registerInclusionResolver('MonitoramentoUsos', this.MonitoramentoUsos.inclusionResolver);
    this.MonitoramentoErros = this.createHasManyRepositoryFactoryFor('MonitoramentoErros', MonitoramentoErroRepositoryGetter,);
    this.registerInclusionResolver('MonitoramentoErros', this.MonitoramentoErros.inclusionResolver);
    this.MonitoramentoCounters = this.createHasManyRepositoryFactoryFor('MonitoramentoCounters', MonitoramentoCounterRepositoryGetter,);
    this.registerInclusionResolver('MonitoramentoCounters', this.MonitoramentoCounters.inclusionResolver);
  }
}
