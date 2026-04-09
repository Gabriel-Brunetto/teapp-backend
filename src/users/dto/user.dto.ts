import { IsEmail, IsNotEmpty, IsString, Min } from "class-validator";


export class CreateUserDTO{
    @IsNotEmpty({message: 'The name do not be empty'})
    name: string;

    @IsEmail()
    email: string;

    @Min(6, {message: 'The minimun length is 6 caracters '})
    password: string;

    @Min(6, {message: 'The minimun length is 6 caracters '})
    confirm_password: string;
}