import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsOutput } from './dtos/item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private readonly repository: Repository<Item>) {}

  private readonly InternalServerError = {
    ok: false,
    error: 'Internal Server Error',
  };

  async getAllItems(): Promise<ItemsOutput> {
    try {
      const items = await this.repository.find();
      return {
        ok: true,
        items,
      };
    } catch (e) {
      return this.InternalServerError;
    }
  }
}
