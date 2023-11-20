import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category_name', type: 'varchar', length: 255, comment: 'Name of the category' })
  categoryName: string;
}