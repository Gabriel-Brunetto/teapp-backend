import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Doctors } from "./doctor.entity";
import { Repository } from "typeorm";

@Injectable()
export class DoctorService{
    constructor(@InjectRepository(Doctors) private repo: Repository<Doctors> ){}

    async listDoctor(){
        return this.repo.find()
    }

    async createDoctor(doctor){
        const doctorData = this.repo.create(doctor)
        return this.repo.save(doctorData)
    }

    async deleteDoctor(id){
        this.repo.delete(id)
    }

    async listDoctorByID(id){
        return this.repo.findOne({where: {id}})
    }
}