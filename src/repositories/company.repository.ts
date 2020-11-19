import {DefaultCrudRepository} from '@loopback/repository';
import {Company, CompanyRelations} from '../models';
import {SampleDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.COMPANY_ID,
  CompanyRelations
> {
  constructor(
    @inject('datasources.sampleDS') dataSource: SampleDsDataSource,
  ) {
    super(Company, dataSource);
  }
}
