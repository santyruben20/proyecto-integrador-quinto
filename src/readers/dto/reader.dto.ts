import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ReaderDTO {
  @IsNotEmpty({ message: 'Reader name cannot be empty' })
  @IsString({ message: 'Reader name must be a string' })
  @MaxLength(255, { message: 'Reader name must not exceed 255 characters' })
  name: string;

  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  @IsString({ message: 'Phone number must be a string' })
  @MaxLength(20, { message: 'Phone number must not exceed 20 characters' })
  phone: string;

  @IsNotEmpty({ message: 'Address cannot be empty' })
  @IsString({ message: 'Address must be a string' })
  @MaxLength(255, { message: 'Address must not exceed 255 characters' })
  address: string;

  @IsNotEmpty({ message: 'Postal code cannot be empty' })
  @IsString({ message: 'Postal code must be a string' })
  @MaxLength(15, { message: 'Postal code must not exceed 15 characters' })
  postalCode: string;
}
