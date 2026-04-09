import { Module } from "@nestjs/common";
import { DoctorsController } from "./doctors.controller";
import { DoctorsRepository } from "./doctors.repository";

@Module({
    controllers: [DoctorsController],
    providers: [DoctorsRepository]
})

export class DoctorModule{}