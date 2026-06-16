import { Get, Post, Param, Body, Controller } from "@nestjs/common";
import { TreatmentsService } from "./treatments.service";
import { TreatmentsDTO } from "./dto/treatments.dto";


@Controller('/treatments')
export class TreatmentsController{

    constructor(private service : TreatmentsService){}

    @Get()
    async listTreatments(){
        return this.service.listTreatments()
    }

    @Post()
    async creatTreatment(@Body() data : TreatmentsDTO){
        return this.service.createTreatments(data)
    }

    @Get(':id')
    async listTreatmentById(@Param('id') id:string){

    }


}