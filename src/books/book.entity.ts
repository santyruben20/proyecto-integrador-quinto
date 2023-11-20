import { AuthorEntity } from 'src/authors/author.entity';
import { CategoryEntity } from 'src/categories/category.entity';
import { PublisherEntity } from 'src/publishers/publisher.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', type: 'varchar', length: 255, comment: 'Title of the book' })
  title: string;

  @Column({ name: 'publication_date', type: 'date', comment: 'Publication date of the book' })
  publicationDate: Date;

  @ManyToOne(() => AuthorEntity)
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => PublisherEntity)
  @JoinColumn({ name: 'publisher_id' })
  publisher: PublisherEntity;

  @Column({ name: 'language', type: 'varchar', length: 50, comment: 'Language of the book' })
  language: string;

  @Column({ name: 'pages', type: 'int', comment: 'Number of pages in the book' })
  pages: number;

  @Column({ name: 'description', type: 'text', comment: 'Description of the book' })
  description: string;
}
