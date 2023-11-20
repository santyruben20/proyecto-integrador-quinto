import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('readers')
export class ReaderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255, comment: 'Name of the reader' })
  name: string;

  @Column({ name: 'phone', type: 'varchar', length: 20, comment: 'Phone number of the reader' })
  phone: string;

  @Column({ name: 'address', type: 'varchar', length: 255, comment: 'Address of the reader' })
  address: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 15, comment: 'Postal code of the reader' })
  postalCode: string;
}
