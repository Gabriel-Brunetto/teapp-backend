import { IsEmail, isNotEmpty, IsNotEmpty, IsUUID } from "class-validator";

export class DoctorDTO{

    @IsUUID('4')
    id: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    password: string
}