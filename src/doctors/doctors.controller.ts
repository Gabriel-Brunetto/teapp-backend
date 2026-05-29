import { Controller, Post, Body, Get, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
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
    
    @Get(':id')
    async listDoctorByID(@Param('id') id:string){
        return this.service.listDoctorByID(id)
    }

    @Delete(':id')
    async deleteDoctor(@Param('id', ParseUUIDPipe) id:string){
        this.service.deleteDoctor(id)
    }


}