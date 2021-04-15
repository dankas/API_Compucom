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
  MonitoramentoSuprimento, Printer
} from '../models';
import {PrinterRepository} from '../repositories';

@authenticate('jwt')
export class PrinterMonitoramentoSuprimentoController {
  constructor(
    @repository(PrinterRepository) protected printerRepository: PrinterRepository,
  ) { }

  @get('/printers/{id}/Monitoramento-suprimentos', {
    responses: {
      '200': {
        description: 'Array of Printer has many MonitoramentoSuprimento',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MonitoramentoSuprimento)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<MonitoramentoSuprimento>,
  ): Promise<MonitoramentoSuprimento[]> {
    return this.printerRepository.MonitoramentoSuprimentos(id).find(filter);
  }

  @post('/printers/{id}/Monitoramento-suprimentos', {
    responses: {
      '200': {
        description: 'Printer model instance',
        content: {'application/json': {schema: getModelSchemaRef(MonitoramentoSuprimento)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Printer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoSuprimento, {
            title: 'NewMonitoramentoSuprimentoInPrinter',
            exclude: ['id'],
            optional: ['printerId']
          }),
        },
      },
    }) MonitoramentoSuprimento: Omit<MonitoramentoSuprimento, 'id'>,
  ): Promise<MonitoramentoSuprimento> {
    return this.printerRepository.MonitoramentoSuprimentos(id).create(MonitoramentoSuprimento);
  }

  @patch('/printers/{id}/Monitoramento-suprimentos', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoSuprimento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoSuprimento, {partial: true}),
        },
      },
    })
    MonitoramentoSuprimento: Partial<MonitoramentoSuprimento>,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoSuprimento)) where?: Where<MonitoramentoSuprimento>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoSuprimentos(id).patch(MonitoramentoSuprimento, where);
  }

  @del('/printers/{id}/Monitoramento-suprimentos', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoSuprimento DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoSuprimento)) where?: Where<MonitoramentoSuprimento>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoSuprimentos(id).delete(where);
  }
}
