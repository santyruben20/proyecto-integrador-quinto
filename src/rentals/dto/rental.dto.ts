import { IsDate, IsNotEmpty, IsObject } from 'class-validator';
import { BookEntity } from 'src/books/book.entity';
import { ReaderEntity } from 'src/readers/reader.entity';

export class RentalDTO {
  @IsNotEmpty({ message: 'Reader must be specified' })
  @IsObject({ message: 'Reader must be a valid object' })
  reader: ReaderEntity;

  @IsNotEmpty({ message: 'Book must be specified' })
  @IsObject({ message: 'Book must be a valid object' })
  book: BookEntity;

  @IsNotEmpty({ message: 'Departure date cannot be empty' })
  @IsDate({ message: 'Invalid departure date' })
  departureDate: Date;

  @IsNotEmpty({ message: 'Entry date cannot be empty' })
  @IsDate({ message: 'Invalid entry date' })
  entryDate: Date;
}
