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
import { AuthorEntity } from './authors/author.entity';
import { BookEntity } from './books/book.entity';
import { CategoryEntity } from './categories/category.entity';
import { PublisherEntity } from './publishers/publisher.entity';
import { ReaderEntity } from './readers/reader.entity';
import { RentalEntity } from './rentals/rental.entity';

@Module({
  imports: [BooksModule, RentalsModule, AuthorsModule, CategoriesModule, PublishersModule, 
    ReadersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'library',
      entities: [
        AuthorEntity,
        BookEntity,
        CategoryEntity,
        PublisherEntity,
        ReaderEntity,
        RentalEntity

      ],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
