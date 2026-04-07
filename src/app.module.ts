import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { UserRepository } from './users/users.repository';

@Module({
  imports: [UserModule],
  controllers: [AppController, ],
  providers: [AppService, UserRepository],
})
export class AppModule {}
