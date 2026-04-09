
export class DoctorsRepository{

    private doctors: any[] = [];

    async createDoctor(doctor){
        this.doctors.push(doctor)
    }

    async listDoctors(){
        return this.doctors;
    }
}