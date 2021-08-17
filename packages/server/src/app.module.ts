import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeModule } from './income/income.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { UserRoles } from './roles/entities/user-roles.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRESS_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRESS_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
    IncomeModule,
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}
