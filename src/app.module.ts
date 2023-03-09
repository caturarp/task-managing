import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './core/config/config';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserRepository } from './user/user.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
  // exports: [UserService],
})
export class AppModule {}
