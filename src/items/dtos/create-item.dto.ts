import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '../../core/dtos/core.dto';
import { Item } from '../entities/item.entity';
import { ItemsOutput } from './item.dto';

@InputType()
export class CreateItemInput extends PickType(Item, ['name', 'description']) {}

@ObjectType()
export class CreateItemOutput extends CoreOutput {}
