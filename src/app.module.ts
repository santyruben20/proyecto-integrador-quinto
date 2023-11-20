import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { RentalsModule } from './rentals/rentals.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { PublishersModule } from './publishers/publishers.module';
import { ReadersModule } from './readers/readers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BooksModule, RentalsModule, AuthorsModule, CategoriesModule, PublishersModule, 
    ReadersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'biblioteca',
      entities: [],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
