import { Controller, Post, Body, Get } from "@nestjs/common";
import { DoctorsRepository } from "./doctors.repository";

@Controller("/doctors")
export class DoctorsController{

    constructor(private doctorsRepository: DoctorsRepository){}

    @Post()
    async createDoctor(@Body() doctorData){
        this.doctorsRepository.createDoctor(doctorData);
        return {status: 'doctor created'}
    }

    @Get()
    async listDoctor(){
        return this.doctorsRepository.listDoctors();
    }



}