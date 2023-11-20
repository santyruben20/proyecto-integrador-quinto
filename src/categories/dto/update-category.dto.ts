import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateCategoryDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'Category name cannot be empty' })
  @IsString({ message: 'Category name must be a string' })
  @MaxLength(255, { message: 'Category name must not exceed 255 characters' })
  categoryName?: string;
}
