import { Query, Resolver } from '@nestjs/graphql';
import { ItemsOutput } from './dtos/item.dto';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Resolver(of => Item)
export class ItemsResolver {
  constructor(private readonly service: ItemsService) {}

  @Query(returns => ItemsOutput)
  getAllItems(): Promise<ItemsOutput> {
    return this.service.getAllItems();
  }
}
