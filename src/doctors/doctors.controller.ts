import { Controller, Post, Body, Get } from "@nestjs/common";
import { DoctorsRepository } from "./doctors.repository";
import { DoctorDTO } from "./dto/doctor.dto";

@Controller("/doctors")
export class DoctorsController{

    constructor(private doctorsRepository: DoctorsRepository){}

    @Post()
    async createDoctor(@Body() doctorData : DoctorDTO){
        this.doctorsRepository.createDoctor(doctorData);
        return {status: 'doctor created'}
    }

    @Get()
    async listDoctor(){
        return this.doctorsRepository.listDoctors();
    }



}