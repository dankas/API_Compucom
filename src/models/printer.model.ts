import {Entity, hasMany, model, property} from '@loopback/repository';
import {MonitoramentoCounter} from './Monitoramento-counter.model';
import {MonitoramentoErro} from './Monitoramento-erro.model';
import {MonitoramentoSuprimento} from './monitoramento-suprimento.model';
import {MonitoramentoUso} from './Monitoramento-uso.model';

@model()
export class Printer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  patrimonio: string;

  @property({
    type: 'object',
    default: {},
  })
  localizacao?: object;

  @property({
    type: 'object',
    default: {},
  })
  config?: object;

  @property({
    type: 'boolean',
  })
  flagErro?: boolean;

  @property({
    type: 'object',
    default: {},
  })
  statusOnline?: object;

  @property({
    type: 'object',
    default: {},
  })
  msgErro?: object;

  @property({
    type: 'object',
    default: {},
  })
  statusSuprimentos?: object;

  @property({
    type: 'object',
    default: {},
  })
  statusContadores?: object;

  @property({
    type: 'string',
  })
  numeroSerie?: string;

  @property({
    type: 'boolean',
  })
  comissionada?: boolean;

  @property({
    type: 'boolean',
  })
  alocada?: boolean;

  @property({
    type: 'number',
  })
  parqueId?: number;

  @property({
    type: 'number',
  })
  printerModeloId?: number;

  @hasMany(() => MonitoramentoCounter)
  MonitoramentoCounters: MonitoramentoCounter[];

  @hasMany(() => MonitoramentoErro)
  MonitoramentoErros: MonitoramentoErro[];

  @hasMany(() => MonitoramentoUso)
  MonitoramentoUsos: MonitoramentoUso[];

  @hasMany(() => MonitoramentoSuprimento)
  MonitoramentoSuprimentos: MonitoramentoSuprimento[];

  constructor(data?: Partial<Printer>) {
    super(data);
  }
}

export interface PrinterRelations {
  // describe navigational properties here
}

export type PrinterWithRelations = Printer & PrinterRelations;
