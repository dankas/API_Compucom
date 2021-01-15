import {Entity, model, property, hasMany} from '@loopback/repository';
import {Printer} from './printer.model';

@model()
export class Parque extends Entity {
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
  nome: string;

  @property({
    type: 'object',
    required: true,
  })
  endereco: object;

  @property({
    type: 'number',
  })
  clienteId?: number;

  @hasMany(() => Printer)
  printersnoparque: Printer[];

  constructor(data?: Partial<Parque>) {
    super(data);
  }
}

export interface ParqueRelations {
  // describe navigational properties here
}

export type ParqueWithRelations = Parque & ParqueRelations;
