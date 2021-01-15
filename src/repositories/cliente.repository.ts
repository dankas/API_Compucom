import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Cliente, ClienteRelations, Parque} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ParqueRepository} from './parque.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly parques: HasManyRepositoryFactory<Parque, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ParqueRepository') protected parqueRepositoryGetter: Getter<ParqueRepository>,
  ) {
    super(Cliente, dataSource);
    this.parques = this.createHasManyRepositoryFactoryFor('parques', parqueRepositoryGetter,);
    this.registerInclusionResolver('parques', this.parques.inclusionResolver);
  }
}
