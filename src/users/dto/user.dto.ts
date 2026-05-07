import { IsEmail, IsNotEmpty, IsString, IsUUID, Min } from "class-validator";


export class CreateUserDTO{

    @IsUUID('4', {message: 'The UUID do not be empty'})
    id: string

    @IsNotEmpty({message: 'The name do not be empty'})
    name: string;

    @IsEmail()
    email: string;

    @Min(6, {message: 'The minimun length is 6 caracters '})
    password: string;

    @Min(6, {message: 'The minimun length is 6 caracters '})
    confirm_password: string;
}