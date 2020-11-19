import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  ROLLID: number;

  @property({
    type: 'string',
    required: true,
  })
  NAME: string;

  @property({
    type: 'string',
    required: true,
  })
  TITLE: string;

  @property({
    type: 'string',
    required: true,
  })
  CLASS: string;

  @property({
    type: 'string',
    required: true,
  })
  SECTION: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
