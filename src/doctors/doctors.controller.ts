import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
import { DoctorDTO } from "./dto/doctor.dto";
import { DoctorService } from "./doctors.service";

@Controller("/doctors")
export class DoctorsController{

    constructor(private service: DoctorService){}

    @Post()
    async createDoctor(@Body() doctor){
        await this.service.createDoctor(doctor);
        return {status: 'doctor created'}
    }

    @Get()
    async listDoctor(){
        return this.service.listDoctor();
    }

    @Delete(':id')
    async deleteDoctor(@Param('id') id:string){
        this.service.deleteDoctor(id)
    }


}