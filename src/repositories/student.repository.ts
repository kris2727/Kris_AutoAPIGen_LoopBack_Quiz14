import {DefaultCrudRepository} from '@loopback/repository';
import {Student, StudentRelations} from '../models';
import {SampleDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.ROLLID,
  StudentRelations
> {
  constructor(
    @inject('datasources.sampleDS') dataSource: SampleDsDataSource,
  ) {
    super(Student, dataSource);
  }
}
