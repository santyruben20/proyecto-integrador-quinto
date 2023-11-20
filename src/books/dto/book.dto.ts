import { IsNotEmpty, IsString, IsOptional, IsDate, IsInt, Min, Max, MaxLength, IsObject } from 'class-validator';
import { AuthorEntity } from 'src/authors/author.entity';
import { CategoryEntity } from 'src/categories/category.entity';
import { PublisherEntity } from 'src/publishers/publisher.entity';

export class BookDTO {
  @IsOptional()
  id?: number;

  @IsNotEmpty({ message: 'Title cannot be empty' })
  @IsString({ message: 'Title must be a string' })
  @MaxLength(255, { message: 'Title must not exceed 255 characters' })
  title: string;

  @IsNotEmpty({ message: 'Publication date cannot be empty' })
  @IsDate({ message: 'Invalid publication date' })
  publicationDate: Date;

  @IsObject({ message: 'Author must be a valid object' })
  author: AuthorEntity;

  @IsObject({ message: 'Category must be a valid object' })
  category: CategoryEntity;

  @IsObject({ message: 'Publisher must be a valid object' })
  publisher: PublisherEntity;

  @IsNotEmpty({ message: 'Language cannot be empty' })
  @IsString({ message: 'Language must be a string' })
  @MaxLength(50, { message: 'Language must not exceed 50 characters' })
  language: string;

  @IsNotEmpty({ message: 'Number of pages cannot be empty' })
  @IsInt({ message: 'Number of pages must be an integer' })
  @Min(1, { message: 'Number of pages must be at least 1' })
  @Max(9999, { message: 'Number of pages must not exceed 9999' })
  pages: number;

  @IsNotEmpty({ message: 'Description cannot be empty' })
  @IsString({ message: 'Description must be a string' })
  description: string;
}
