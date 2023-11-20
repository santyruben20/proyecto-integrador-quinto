import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdatePublisherDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'Publisher name cannot be empty' })
  @IsString({ message: 'Publisher name must be a string' })
  @MaxLength(255, { message: 'Publisher name must not exceed 255 characters' })
  publisherName?: string;
}
