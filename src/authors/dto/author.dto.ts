import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class AuthorDTO {
  @IsOptional()
  id?: number;

  @IsNotEmpty({ message: 'Author name cannot be empty' })
  @IsString({ message: 'Author name must be a string' })
  @MaxLength(255, { message: 'Author name must not exceed 255 characters' })
  authorName: string;
}