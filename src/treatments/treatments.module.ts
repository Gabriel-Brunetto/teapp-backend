import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Treatments } from "./treatments.entity";
import { TreatmentsController } from "./treatments.controller";
import { TreatmentsService } from "./treatments.service";


@Module({
    imports: [TypeOrmModule.forFeature([Treatments])],
    controllers: [TreatmentsController],
    providers: [TreatmentsService]
})

export class TreatmentsModule{}