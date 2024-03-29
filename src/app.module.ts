import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Adress } from './users/entities/Adress';
import { Details } from './users/entities/Details';
import { UserPassport } from './users/entities/UserPassport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'surus.db.elephantsql.com',
      port: 5432,
      username: 'xrhoslcg',
      password: '2ajZoPWKf1Ns4Leot4VRwK0k3vtOs4Qu',
      database: 'xrhoslcg',
      entities: [User, Adress, Details, UserPassport],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
