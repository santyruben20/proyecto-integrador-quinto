import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'author_name', type: 'varchar', length: 255, comment: 'Name of the author' })
  authorName: string;
}