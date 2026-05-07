import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { DoctorModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, DoctorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'teappbd',
      username: 'gabrielbrunetto',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
