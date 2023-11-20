import { AuthorEntity } from 'src/authors/author.entity';
import { CategoryEntity } from 'src/categories/category.entity';
import { PublisherEntity } from 'src/publishers/publisher.entity';
export declare class BookDTO {
    id?: number;
    title: string;
    publicationDate: Date;
    author: AuthorEntity;
    category: CategoryEntity;
    publisher: PublisherEntity;
    language: string;
    pages: number;
    description: string;
}
