import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CoreOutput } from '../../core/dtos/core.dto';
import { Item } from '../entities/item.entity';

@ObjectType()
export class ItemsOutput extends CoreOutput {
  @Field(type => [Item], { nullable: true })
  @IsOptional()
  items?: Item[];
}
