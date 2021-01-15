import {Entity, model, property} from '@loopback/repository';

@model()
export class MonitoramentoErro extends Entity {
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

  constructor(data?: Partial<MonitoramentoErro>) {
    super(data);
  }
}

export interface MonitoramentoErroRelations {
  // describe navigational properties here
}

export type MonitoramentoErroWithRelations = MonitoramentoErro & MonitoramentoErroRelations;
