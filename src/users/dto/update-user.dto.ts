import { IsDate, IsNotEmpty, IsObject, IsOptional } from 'class-validator';

export class UptadeUserDTO {

    @IsOptional()
    @IsNotEmpty({ message: 'name cannot be empty' })
    name?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'the last name cannot be empty' })
    lastname?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'address cannot be empty' })
    address?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'the email cannot be empty' })
    email?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'the password cannot be empty' })
    password?: string;
}
