import {Entity, model, property, hasMany} from '@loopback/repository';
import {Printer} from './printer.model';

@model()
export class PrinterModelo extends Entity {
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
  fabricante: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  funcao: string;

  @property({
    type: 'object',
    default: {},
  })
  especs?: object;

  @property({
    type: 'object',
    default: {},
  })
  codigosSuprimentos?: object;

  @property({
    type: 'object',
    default: {},
  })
  codigosParts?: object;

  @property({
    type: 'object',
    default: {},
  })
  codigosSnmp?: object;

  @hasMany(() => Printer)
  printers: Printer[];

  constructor(data?: Partial<PrinterModelo>) {
    super(data);
  }
}

export interface PrinterModeloRelations {
  // describe navigational properties here
}

export type PrinterModeloWithRelations = PrinterModelo & PrinterModeloRelations;
