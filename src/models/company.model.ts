import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Company extends Entity {
  
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  COMPANY_ID: string;
  
  @property({
    type: 'string',
    required: true,
  })
  COMPANY_NAME: string;
  
  @property({
    type: 'string',
    required: true,
  })
  COMPANY_CITY: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
