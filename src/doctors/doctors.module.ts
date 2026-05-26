import { Module } from "@nestjs/common";
import { DoctorsController } from "./doctors.controller";
import { DoctorService } from "./doctors.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Doctors } from "./doctor.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Doctors])],
    controllers: [DoctorsController],
    providers: [DoctorService]
})

export class DoctorModule{}