import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {PrinterModelo} from '../models';
import {PrinterModeloRepository} from '../repositories';

@authenticate('jwt')
export class PrinterModeloController {
  constructor(
    @repository(PrinterModeloRepository)
    public printerModeloRepository : PrinterModeloRepository,
  ) {}

  @post('/printer-modelos')
  @response(200, {
    description: 'PrinterModelo model instance',
    content: {'application/json': {schema: getModelSchemaRef(PrinterModelo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PrinterModelo, {
            title: 'NewPrinterModelo',
            exclude: ['id'],
          }),
        },
      },
    })
    printerModelo: Omit<PrinterModelo, 'id'>,
  ): Promise<PrinterModelo> {
    return this.printerModeloRepository.create(printerModelo);
  }

  @get('/printer-modelos/count')
  @response(200, {
    description: 'PrinterModelo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PrinterModelo) where?: Where<PrinterModelo>,
  ): Promise<Count> {
    return this.printerModeloRepository.count(where);
  }

  @get('/printer-modelos')
  @response(200, {
    description: 'Array of PrinterModelo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PrinterModelo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PrinterModelo) filter?: Filter<PrinterModelo>,
  ): Promise<PrinterModelo[]> {
    return this.printerModeloRepository.find(filter);
  }

  @patch('/printer-modelos')
  @response(200, {
    description: 'PrinterModelo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PrinterModelo, {partial: true}),
        },
      },
    })
    printerModelo: PrinterModelo,
    @param.where(PrinterModelo) where?: Where<PrinterModelo>,
  ): Promise<Count> {
    return this.printerModeloRepository.updateAll(printerModelo, where);
  }

  @get('/printer-modelos/{id}')
  @response(200, {
    description: 'PrinterModelo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PrinterModelo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PrinterModelo, {exclude: 'where'}) filter?: FilterExcludingWhere<PrinterModelo>
  ): Promise<PrinterModelo> {
    return this.printerModeloRepository.findById(id, filter);
  }

  @patch('/printer-modelos/{id}')
  @response(204, {
    description: 'PrinterModelo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PrinterModelo, {partial: true}),
        },
      },
    })
    printerModelo: PrinterModelo,
  ): Promise<void> {
    await this.printerModeloRepository.updateById(id, printerModelo);
  }

  @put('/printer-modelos/{id}')
  @response(204, {
    description: 'PrinterModelo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() printerModelo: PrinterModelo,
  ): Promise<void> {
    await this.printerModeloRepository.replaceById(id, printerModelo);
  }

  @del('/printer-modelos/{id}')
  @response(204, {
    description: 'PrinterModelo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.printerModeloRepository.deleteById(id);
  }
}
