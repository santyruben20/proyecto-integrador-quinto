import { IsDate, IsNotEmpty, IsObject } from 'class-validator';

export class UserDTO {
  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'the last name cannot be empty' })
  lastname: string;

  @IsNotEmpty({ message: 'address cannot be empty' })
  address: string;

  @IsNotEmpty({ message: 'the email cannot be empty' })
  email: string;

  @IsNotEmpty({ message: 'the password cannot be empty' })
  password: string;
}
