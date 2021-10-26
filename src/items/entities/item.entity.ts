// item.entity.ts
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';
import { CoreEntity } from '../../core/entities/core.entity';

@InputType('ItemInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Item extends CoreEntity {
  @Column({ length: 300 })
  @Field(type => String)
  name: string;

  @Column({ length: 300 })
  @Field(type => String)
  description: string;
}
