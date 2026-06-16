import { IsNotEmpty } from "class-validator";

export class TreatmentsDTO{
    @IsNotEmpty()
    title: string
}