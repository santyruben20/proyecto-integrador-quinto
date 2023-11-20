import { IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateAuthorDTO {
  @IsOptional()
  @IsString({ message: 'Author name must be a string' })
  @MaxLength(255, { message: 'Author name must not exceed 255 characters' })
  authorName?: string;
}
