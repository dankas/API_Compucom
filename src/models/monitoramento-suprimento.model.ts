import {Entity, model, property} from '@loopback/repository';


@model()
export class MonitoramentoSuprimento extends Entity {
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

  constructor(data?: Partial<MonitoramentoSuprimento>) {
    super(data);
  }
}

export interface MonitoramentoSuprimentoRelations {
  // describe navigational properties here
}

export type MonitoramentoSuprimentoWithRelations = MonitoramentoSuprimento & MonitoramentoSuprimentoRelations;
