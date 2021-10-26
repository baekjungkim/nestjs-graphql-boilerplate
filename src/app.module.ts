import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { configService } from './config/config.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    // TypeOrm Setting
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    // Graphql Setting
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
