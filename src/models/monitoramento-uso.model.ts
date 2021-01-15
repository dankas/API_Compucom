import {Entity, model, property} from '@loopback/repository';

@model()
export class MonitoramentoUso extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
    required: true,
  })
  dados: object;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  printerId?: number;

  constructor(data?: Partial<MonitoramentoUso>) {
    super(data);
  }
}

export interface MonitoramentoUsoRelations {
  // describe navigational properties here
}

export type MonitoramentoUsoWithRelations = MonitoramentoUso & MonitoramentoUsoRelations;
