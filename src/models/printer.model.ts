import {Entity, model, property} from '@loopback/repository';

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
    type: 'date',
  })
  dataInstalacao?: string;

  @property({
    type: 'date',
  })
  dataAquisicao?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  comissionada: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  alocada: boolean;

  @property({
    type: 'boolean',
    default: 0,
  })
  flagErro?: boolean;

  @property({
    type: 'string',
  })
  msgErro?: string;

  @property({
    type: 'object',
  })
  statusSuprimentos?: object;

  @property({
    type: 'object',
  })
  config?: object;

  @property({
    type: 'object',
  })
  localInstalacao?: object;

  @property({
    type: 'string',
    required: true,
  })
  numeroSerial: string;

  @property({
    type: 'number',
    default: 1,
  })
  parqueId?: number;


  constructor(data?: Partial<Printer>) {
    super(data);
  }
}

export interface PrinterRelations {
  // describe navigational properties here
}

export type PrinterWithRelations = Printer & PrinterRelations;
