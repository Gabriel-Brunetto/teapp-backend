import { InjectRepository } from "@nestjs/typeorm";
import { Treatments } from "./treatments.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TreatmentsService{
    
    constructor(@InjectRepository(Treatments) private repo : Repository<Treatments>){}

    async listTreatments(){
        return this.repo.find()
    }

    async createTreatments(treatData){
        const treatment = this.repo.create(treatData)
        return this.repo.save(treatment)
    }

}