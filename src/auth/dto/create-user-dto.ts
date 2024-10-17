import { IsEmail, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Min(3)
    password: string
}