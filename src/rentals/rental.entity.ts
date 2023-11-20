import { BookEntity } from 'src/books/book.entity';
import { ReaderEntity } from 'src/readers/reader.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('rentals')
export class RentalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ReaderEntity)
  @JoinColumn({ name: 'reader_id' })
  reader: ReaderEntity;

  @ManyToOne(() => BookEntity)
  @JoinColumn({ name: 'book_id' })
  book: BookEntity;

  @Column({ name: 'departure_date', type: 'date', comment: 'Departure date of the rental' })
  departureDate: Date;

  @Column({ name: 'entry_date', type: 'date', comment: 'Entry date of the rental' })
  entryDate: Date;
}
