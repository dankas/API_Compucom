import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  MonitoramentoUso, Printer
} from '../models';
import {PrinterRepository} from '../repositories';

export class PrinterMonitoramentoUsoController {
  constructor(
    @repository(PrinterRepository) protected printerRepository: PrinterRepository,
  ) { }

  @get('/printers/{id}/Monitoramento-usos', {
    responses: {
      '200': {
        description: 'Array of Printer has many MonitoramentoUso',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MonitoramentoUso)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<MonitoramentoUso>,
  ): Promise<MonitoramentoUso[]> {
    return this.printerRepository.MonitoramentoUsos(id).find(filter);
  }

  @post('/printers/{id}/Monitoramento-usos', {
    responses: {
      '200': {
        description: 'Printer model instance',
        content: {'application/json': {schema: getModelSchemaRef(MonitoramentoUso)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Printer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoUso, {
            title: 'NewMonitoramentoUsoInPrinter',
            exclude: ['id'],
            optional: ['printerId']
          }),
        },
      },
    }) MonitoramentoUso: Omit<MonitoramentoUso, 'id'>,
  ): Promise<MonitoramentoUso> {
    return this.printerRepository.MonitoramentoUsos(id).create(MonitoramentoUso);
  }

  @patch('/printers/{id}/Monitoramento-usos', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoUso PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoUso, {partial: true}),
        },
      },
    })
    MonitoramentoUso: Partial<MonitoramentoUso>,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoUso)) where?: Where<MonitoramentoUso>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoUsos(id).patch(MonitoramentoUso, where);
  }

  @del('/printers/{id}/Monitoramento-usos', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoUso DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoUso)) where?: Where<MonitoramentoUso>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoUsos(id).delete(where);
  }
}
