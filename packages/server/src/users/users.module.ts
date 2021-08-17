import { RolesModule } from './../roles/roles.module';
import { Role } from './../roles/entities/role.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UserRoles } from 'src/roles/entities/user-roles.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
