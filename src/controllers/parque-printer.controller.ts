import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Parque,
  Printer,
} from '../models';
import {ParqueRepository} from '../repositories';

export class ParquePrinterController {
  constructor(
    @repository(ParqueRepository) protected parqueRepository: ParqueRepository,
  ) { }

  @get('/parques/{id}/printers', {
    responses: {
      '200': {
        description: 'Array of Parque has many Printer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Printer)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Printer>,
  ): Promise<Printer[]> {
    return this.parqueRepository.printersnoparque(id).find(filter);
  }

  @post('/parques/{id}/printers', {
    responses: {
      '200': {
        description: 'Parque model instance',
        content: {'application/json': {schema: getModelSchemaRef(Printer)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Parque.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Printer, {
            title: 'NewPrinterInParque',
            exclude: ['id'],
            optional: ['parqueId']
          }),
        },
      },
    }) printer: Omit<Printer, 'id'>,
  ): Promise<Printer> {
    return this.parqueRepository.printersnoparque(id).create(printer);
  }

  @patch('/parques/{id}/printers', {
    responses: {
      '200': {
        description: 'Parque.Printer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Printer, {partial: true}),
        },
      },
    })
    printer: Partial<Printer>,
    @param.query.object('where', getWhereSchemaFor(Printer)) where?: Where<Printer>,
  ): Promise<Count> {
    return this.parqueRepository.printersnoparque(id).patch(printer, where);
  }

  @del('/parques/{id}/printers', {
    responses: {
      '200': {
        description: 'Parque.Printer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Printer)) where?: Where<Printer>,
  ): Promise<Count> {
    return this.parqueRepository.printersnoparque(id).delete(where);
  }
}
