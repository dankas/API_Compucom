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
  Printer, PrinterModelo
} from '../models';
import {PrinterModeloRepository} from '../repositories';

@authenticate('jwt')
export class PrinterModeloPrinterController {
  constructor(
    @repository(PrinterModeloRepository) protected printerModeloRepository: PrinterModeloRepository,
  ) { }

  @get('/printer-modelos/{id}/printers', {
    responses: {
      '200': {
        description: 'Array of PrinterModelo has many Printer',
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
    return this.printerModeloRepository.printers(id).find(filter);
  }

  @post('/printer-modelos/{id}/printers', {
    responses: {
      '200': {
        description: 'PrinterModelo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Printer)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof PrinterModelo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Printer, {
            title: 'NewPrinterInPrinterModelo',
            exclude: ['id'],
            optional: ['printerModeloId']
          }),
        },
      },
    }) printer: Omit<Printer, 'id'>,
  ): Promise<Printer> {
    return this.printerModeloRepository.printers(id).create(printer);
  }

  @patch('/printer-modelos/{id}/printers', {
    responses: {
      '200': {
        description: 'PrinterModelo.Printer PATCH success count',
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
    return this.printerModeloRepository.printers(id).patch(printer, where);
  }

  @del('/printer-modelos/{id}/printers', {
    responses: {
      '200': {
        description: 'PrinterModelo.Printer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Printer)) where?: Where<Printer>,
  ): Promise<Count> {
    return this.printerModeloRepository.printers(id).delete(where);
  }
}
