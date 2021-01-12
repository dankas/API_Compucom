import {Entity, model, property} from '@loopback/repository';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'object',
  })
  endereco?: object;

  @property({
    type: 'number',
    id: true,
    generated: true,

  })
  id: number;

  @property({
    type: 'string',
  })
  contrato: string;

  @property({
    type: 'object',
    required: true,
  })
  servicosPrestados: object;

  @property({
    type: 'object',
  })
  valores?: object;

  @property({
    type: 'string',
    required: true,
  })
  descricaoCliente: string;

  @property({
    type: 'date',
  })
  dataInicio?: string;

  @property({
    type: 'date',
    required: true,
  })
  dataEncerramento: string;

  @property({
    type: 'boolean',
    required: true,
  })
  ativo: boolean;

  @property({
    type: 'string',
    required: true,
  })
  tipoCliente: string;


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
