import {Entity, hasMany, model, property} from '@loopback/repository';
import {Parque} from './parque.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    default: " ",
  })
  nome?: string;

  @property({
    type: 'object',
    default: {"Aviso":"prencher com informações de contato"},
  })
  contato?: object;

  @property({
    type: 'string',
    default: "00001",
  })
  contrato?: string;

  @property({
    type: 'object',
    default: {"Aviso":"Descreva os servições prestados."},
  })
  servicosPrestados?: object;

  @property({
    type: 'object',
    default: {"Aviso":"prencher com informações de preços dos servições."},
  })
  valoresCobrados?: object;

  @property({
    type: 'string',
  })
  descricaoCliente?: string;

  @property({
    type: 'string',
  })
  tipoCliente?: string;

  @property({
    type: 'date',
  })
  dataInicio?: string;

  @property({
    type: 'date',
  })
  dataEncerramento?: string;

  @property({
    type: 'boolean',

  })
  ativo?: boolean;

  @hasMany(() => Parque)
  parques: Parque[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
