import {Entity, model, property} from '@loopback/repository';

@model()
export class Parque extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  clienteId: number;

  @property({
    type: 'object',
    required: true,
  })
  endereco: object;

  @property({
    type: 'object',
  })
  contato?: object;


  constructor(data?: Partial<Parque>) {
    super(data);
  }
}

export interface ParqueRelations {
  // describe navigational properties here
}

export type ParqueWithRelations = Parque & ParqueRelations;
