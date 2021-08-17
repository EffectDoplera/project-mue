import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private repository: typeof Role) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.repository.create(createRoleDto);
    return role;
  }

  async getByValue(value: string) {
    const role = await this.repository.findOne({ where: { value } });
    return role;
  }
}
