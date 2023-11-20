import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publishers')
export class PublisherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'publisher_name', type: 'varchar', length: 255, comment: 'Name of the publisher' })
  publisherName: string;
}