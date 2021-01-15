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
  MonitoramentoErro, Printer
} from '../models';
import {PrinterRepository} from '../repositories';

export class PrinterMonitoramentoErroController {
  constructor(
    @repository(PrinterRepository) protected printerRepository: PrinterRepository,
  ) { }

  @get('/printers/{id}/Monitoramento-erros', {
    responses: {
      '200': {
        description: 'Array of Printer has many MonitoramentoErro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MonitoramentoErro)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<MonitoramentoErro>,
  ): Promise<MonitoramentoErro[]> {
    return this.printerRepository.MonitoramentoErros(id).find(filter);
  }

  @post('/printers/{id}/Monitoramento-erros', {
    responses: {
      '200': {
        description: 'Printer model instance',
        content: {'application/json': {schema: getModelSchemaRef(MonitoramentoErro)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Printer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoErro, {
            title: 'NewMonitoramentoErroInPrinter',
            exclude: ['id'],
            optional: ['printerId']
          }),
        },
      },
    }) MonitoramentoErro: Omit<MonitoramentoErro, 'id'>,
  ): Promise<MonitoramentoErro> {
    return this.printerRepository.MonitoramentoErros(id).create(MonitoramentoErro);
  }

  @patch('/printers/{id}/Monitoramento-erros', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoErro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MonitoramentoErro, {partial: true}),
        },
      },
    })
    MonitoramentoErro: Partial<MonitoramentoErro>,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoErro)) where?: Where<MonitoramentoErro>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoErros(id).patch(MonitoramentoErro, where);
  }

  @del('/printers/{id}/Monitoramento-erros', {
    responses: {
      '200': {
        description: 'Printer.MonitoramentoErro DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MonitoramentoErro)) where?: Where<MonitoramentoErro>,
  ): Promise<Count> {
    return this.printerRepository.MonitoramentoErros(id).delete(where);
  }
}
