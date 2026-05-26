import { IsEmail, isNotEmpty, IsNotEmpty, IsUUID } from "class-validator";

export class DoctorDTO{

    @IsEmail()
    email: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    crm: string
}