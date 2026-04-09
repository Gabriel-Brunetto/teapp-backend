import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { UserRepository } from './users/users.repository';
import { DoctorModule } from './doctors/doctors.module';
import { DoctorsRepository } from './doctors/doctors.repository';

@Module({
  imports: [UserModule, DoctorModule],
  controllers: [AppController, ],
  providers: [AppService, UserRepository, DoctorsRepository],
})
export class AppModule {}
