import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./users/entities/user.entity";
import {FileEntity} from "./files/entities/file.entity";
import {ConfigModule} from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'snuffleupagus.db.elephantsql.com',
      port: 5432,
      username: 'rmmzpcbb',
      password: 'sqt3xJ0HCuQkFV5REjNtpPsV2Vpk-LAC',
      database: 'rmmzpcbb',
      entities: [UserEntity,FileEntity],
      synchronize: true,
    }),UsersModule, FilesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
