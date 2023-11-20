import { IsDate, IsNotEmpty, IsObject, IsOptional } from 'class-validator';
import { BookEntity } from 'src/books/book.entity';
import { ReaderEntity } from 'src/readers/reader.entity';

export class UpdateRentalDTO {
  @IsOptional()
  @IsObject({ message: 'Reader must be a valid object' })
  reader?: ReaderEntity;

  @IsOptional()
  @IsObject({ message: 'Book must be a valid object' })
  book?: BookEntity;

  @IsOptional()
  @IsNotEmpty({ message: 'Departure date cannot be empty' })
  @IsDate({ message: 'Invalid departure date' })
  departureDate?: Date;

  @IsOptional()
  @IsNotEmpty({ message: 'Entry date cannot be empty' })
  @IsDate({ message: 'Invalid entry date' })
  entryDate?: Date;
}
