import {authenticate} from '@loopback/authentication';
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
  MonitoramentoCounter, Printer
} from '../models';
import {PrinterRepository} from '../repositories';

@authenticate('jwt')
export class PrinterMonitoramentoCounterController {
  constructor(
    @repository(PrinterRepository) protected printerRepository: PrinterRepository,
  ) { }

  @get('/printers/{id}/monitoramento-counters', {
    responses: {
      '200': {
        description: 'Array of Printer has many MonitoramentoCounter',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MonitoramentoCounter)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<MonitoramentoCounter>,
  ): Promise<MonitoramentoCounter[]> {
    return this.printerRepository.MonitoramentoCounters(id).find(filter);
  }

  @post('/printers/{id}/monitoramento-counters', {
    responses: {
      '200': {
        description: 'Printer model instance',
        content: {'application/json': {schema: getModelSchemaRef(MonitoramentoCounter)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Printer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoCounter, {
            title: 'NewMonitoramentoCounterInPrinter',
            exclude: ['id'],
            optional: ['printerId']
          }),
        },
      },
    }) monitoramentoCounter: Omit<MonitoramentoCounter, 'id'>,
  ): Promise<MonitoramentoCounter> {
    return this.printerRepository.MonitoramentoCounters(id).create(monitoramentoCounter);
  }

  @patch('/printers/{id}/monitoramento-counters', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoCounter PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoCounter, {partial: true}),
        },
      },
    })
    monitoramentoCounter: Partial<MonitoramentoCounter>,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoCounter)) where?: Where<MonitoramentoCounter>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoCounters(id).patch(monitoramentoCounter, where);
  }

  @del('/printers/{id}/monitoramento-counters', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoCounter DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoCounter)) where?: Where<MonitoramentoCounter>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoCounters(id).delete(where);
  }
}
